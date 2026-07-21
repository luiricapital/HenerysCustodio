import { Client, isFullPage } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

function getTitle(page: any): string {
  const prop = page.properties?.Title;
  return prop?.title?.[0]?.plain_text ?? 'Sin título';
}

function getSlug(page: any): string {
  const prop = page.properties?.Slug;
  return prop?.rich_text?.[0]?.plain_text ?? page.id;
}

function getDate(page: any): string {
  return page.properties?.Date?.date?.start ?? '';
}

export async function getPublishedPosts(): Promise<Post[]> {
  let response;
  try {
    response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: { property: 'Published', checkbox: { equals: true } },
      sorts: [{ property: 'Date', direction: 'descending' }],
    });
  } catch (error) {
    console.error('Notion query failed:', error);
    return [];
  }

  const posts = response.results.filter(isFullPage).map((page) => ({
    id: page.id,
    slug: getSlug(page),
    title: getTitle(page),
    date: getDate(page),
    excerpt: '',
  }));

  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      excerpt: await getExcerpt(post.id),
    }))
  );
}

async function getExcerpt(pageId: string): Promise<string> {
  const mdBlocks = await n2m.pageToMarkdown(pageId, 1);
  const mdString = n2m.toMarkdownString(mdBlocks).parent ?? '';
  const plain = mdString.replace(/[#>*_`\-\[\]]/g, '').trim();
  return plain.slice(0, 180);
}

export async function getPostBySlug(slug: string): Promise<{ post: Post; markdown: string } | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Published', checkbox: { equals: true } },
      ],
    },
  });

  const page = response.results.find(isFullPage);
  if (!page) return null;

  const post: Post = {
    id: page.id,
    slug: getSlug(page),
    title: getTitle(page),
    date: getDate(page),
    excerpt: '',
  };

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks).parent ?? '';

  return { post, markdown };
}
