import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "ClaudyRg | Portfolio",
  description: "Fullstack Architect & Creative Developer crafting digital universes with soul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased font-body`}
      >
        <div className="nightscape-bg" />
        <div className="nightscape-clouds" />
        {children}
      </body>
    </html>
  );
}
