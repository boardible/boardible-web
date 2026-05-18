import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Rubik } from "next/font/google";
import "./globals.css";

const display = Rubik({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boardible.com"),
  title: "Boardible | The Ultimate Digital Board Game Ecosystem",
  description:
    "Boardible builds vibrant digital board game experiences across mobile, shared-screen play and publisher-ready standalone products.",
  openGraph: {
    title: "Boardible | The Ultimate Digital Board Game Ecosystem",
    description:
      "A bright, playful digital board game platform with multiple apps, original titles, publisher partnerships and global reach.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boardible | The Ultimate Digital Board Game Ecosystem",
    description:
      "A bright digital board game platform with mobile-first experiences, shared-screen play and publisher partnerships.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}