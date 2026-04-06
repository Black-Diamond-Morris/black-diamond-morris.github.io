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
      <body className="m-auto flex min-h-full max-w-6xl flex-col gap-4 p-4 pb-8">
        {children}
      </body>
    </html>
  );
}
