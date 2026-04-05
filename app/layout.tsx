import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Diamond Morris",
  description: "Black Diamond Mixed Cotswold Morris based in Darlington, UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
