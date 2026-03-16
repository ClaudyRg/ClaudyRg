import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/Starfield";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-soft"
});

export const metadata = {
  title: "ClauRg | Grand Architect",
  description: "Visionary Full Stack Developer shaping digital universes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased font-soft`}>
        <div className="star-background" />
        <div className="galaxy-mesh" />
        {children}
      </body>
    </html>
  );
}
