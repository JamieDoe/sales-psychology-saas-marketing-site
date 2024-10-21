import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Psychology Marekting Site",
  description: "Marketing site for Sales Psychology SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
