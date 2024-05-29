import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lotus Valley International School, Gurugram",
  description:
    "The (un)official website for LVISG, a private, progressive co-ed school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My App</title>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <Script src="https://example.com/analytics.js" type="text/partytown" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
