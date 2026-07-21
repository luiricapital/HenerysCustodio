import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Henerys Custodio — Estratega, Consultor y Speaker en Emprendimiento Institucional',
    template: '%s — Henerys Custodio',
  },
  description: '[PLACEHOLDER] Henerys Custodio — charlas y consultoría en emprendimiento institucional, estrategia y desarrollo de ecosistemas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-navy antialiased">{children}</body>
    </html>
  );
}
