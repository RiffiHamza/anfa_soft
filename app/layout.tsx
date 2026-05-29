import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anfa Softworks — Software, engineered.",
    template: "%s | Anfa Softworks",
  },
  description:
    "Anfa Softworks is an independent software studio building production-grade web, mobile, and AI applications. Registered in New Mexico, USA.",
  metadataBase: new URL("https://anfasoftworks.com"),
  openGraph: {
    title: "Anfa Softworks — Software, engineered.",
    description:
      "An independent software studio building production-grade web, mobile, and AI applications.",
    url: "https://anfasoftworks.com",
    siteName: "Anfa Softworks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
