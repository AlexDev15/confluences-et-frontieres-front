import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Confluences & Frontieres",
  description: "Projet d'echanges interculturels INTER+VALUE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${robotoMono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-mono text-on-surface bg-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
