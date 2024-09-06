import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "KJAVSE",
  description: "Sportegyesület",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <title>KJAVSE</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Keszthelyi József Attila Vitorlás Sportegyesület" />
        <meta name="author" content="Rajkai Zoltán" />
        <meta name="keywords" content="vitorlás, sport, egyesület, Keszthely" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
