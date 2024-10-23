import type { Metadata } from 'next';
import './globals.css';
import { LogoutButton, Toaster } from '@/components';

export const metadata: Metadata = {
  title: 'Sales Psychology Marekting Site',
  description: 'Marketing site for Sales Psychology SaaS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LogoutButton />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
