import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans, titleFont } from "./_config/fonts";

export const metadata: Metadata = {
  title: "Teslo - Shop",
  description: "Una tienda virtual de Productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
