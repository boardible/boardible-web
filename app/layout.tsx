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
  title: {
    default: "Boardible | Digital Board Games for iPhone and Android",
    template: "%s | Boardible",
  },
  applicationName: "Boardible",
  description:
    "Boardible publishes digital board game experiences across iPhone, iPad, Android, shared-screen play, and standalone mobile products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boardible | Digital Board Games for iPhone and Android",
    description:
      "Discover Boardible, Isso não é um Jogo, and Monstic TacToe with direct App Store and Google Play download links.",
    type: "website",
    url: "https://www.boardible.com",
    siteName: "Boardible",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boardible | Digital Board Games for iPhone and Android",
    description:
      "Discover Boardible apps and games with direct install links for the App Store and Google Play.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}