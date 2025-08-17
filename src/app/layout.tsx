import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Resedagbok',
  description: 'En webbaserad resedagbok',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}