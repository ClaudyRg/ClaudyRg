import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Petals } from "@/components/Petals";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-heading" 
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-body" 
});

export const metadata = {
  title: "ClauRg | Blossom Architect",
  description: "A digital blossom in the vast galaxy, unfolding with singular vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${playfair.variable} ${outfit.variable} antialiased font-body`}>
        <div className="garden-background" />
        <div className="blossom-mesh" />
        <Petals />
        {children}
      </body>
    </html>
  );
}
