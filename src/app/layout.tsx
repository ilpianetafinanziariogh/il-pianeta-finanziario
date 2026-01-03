import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import NeuralBackground from "@/components/site/NeuralBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Il Pianeta Finanziario",
  description: "Corsi per la salute mente-corpo e la finanza personale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <NeuralBackground />
        <div className="relative z-10">
          <Navbar />
          <ClientBody>{children}</ClientBody>
          <Footer />
        </div>
      </body>
    </html>
  );
}
