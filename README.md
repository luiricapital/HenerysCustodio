# Henerys Custodio — Sitio + Blog Doctoral

Next.js (App Router) + Tailwind CSS. El blog se alimenta de una base de datos de Notion.

## Desarrollo local

```bash
npm install
cp .env.local.example .env.local   # completar NOTION_API_KEY y NOTION_DATABASE_ID
npm run dev
```

## Setup de Notion

1. Crear una base de datos en Notion llamada **Blog** con estas propiedades:
   - `Title` (title)
   - `Date` (date)
   - `Slug` (text)
   - `Published` (checkbox)
2. Crear una integración en [notion.so/my-integrations](https://www.notion.so/my-integrations) y copiar el API key.
3. Compartir la base de datos con la integración (··· → Connections → agregar la integración).
4. Copiar el ID de la base de datos desde la URL (`notion.so/xxxxx?v=...` → el `xxxxx`).

## Flujo de Henerys (sin tocar código)

1. Abrir Notion → nueva fila en la base **Blog**
2. Escribir el contenido en la página
3. Completar `Title`, `Date`, `Slug`
4. Marcar `Published`
5. El sitio se actualiza solo (ISR cada 60 min)

## Deploy en Vercel

1. Conectar el repo en [vercel.com/new](https://vercel.com/new)
2. Agregar las variables de entorno `NOTION_API_KEY` y `NOTION_DATABASE_ID` en Project Settings → Environment Variables
3. Deploy — plan Hobby (gratis) es suficiente

## Estructura

- `/` — Home
- `/sobre` — Sobre Henerys (incluye bio + link al blog)
- `/speaker` — Charlas y keynotes
- `/consultoria` — Servicios de consultoría
- `/contacto` — Formulario de contacto
- `/blog` — Listado de posts publicados (Notion)
- `/blog/[slug]` — Post individual (contenido de Notion renderizado como markdown)
