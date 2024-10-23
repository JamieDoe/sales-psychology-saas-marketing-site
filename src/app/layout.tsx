import type { Metadata } from 'next';
import './globals.css';
import { LogoutButton, Toaster, NavBar } from '@/components';

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
        <NavBar />
        <LogoutButton />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
