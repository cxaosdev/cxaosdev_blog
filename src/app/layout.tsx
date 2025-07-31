import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

const marker = localFont({
  src: "./fonts/PermanentMarker-Regular.ttf",
  variable: "--font-marker",
  weight: "400",
});

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
        className={`bg-[#101820] ${geistSans.variable} ${geistMono.variable} ${marker.variable} antialiased`}
      >
        <header className="px-12 py-6 bg-[#101820] text-[#F2AA4C] flex justify-between items-center">
          <h1 className="font-marker font-black text-4xl">{"</> cxaosdev"}</h1>
          <a
            href="https://github.com/cxaosdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#F2AA4C] hover:text-white transition-colors duration-200"
          >
            <FaGithub size={28} />
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
