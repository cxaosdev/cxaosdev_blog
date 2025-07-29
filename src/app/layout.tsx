import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "cxaosdev's blog",
  description: "cxaosdev's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#F2AA4C] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-6 py-6 bg-[#101820] text-[#F2AA4C]">
          <h1 className="text-3xl font-semibold">cxaosdev</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
