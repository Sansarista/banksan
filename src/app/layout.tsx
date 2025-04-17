import type { Metadata } from "next";
import { IBM_Plex_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: 'swap',
});

export const metadata = {
  title: "Banksan",
  description: "Minimalist banking for the modern world — secure, seamless, and smart.",
  keywords: ["Banksan", "modern banking", "minimalist banking", "financial experience", "secure banking", "smart banking"],
  authors: [{ name: "Banksan" }],
  openGraph: {
    title: "Banksan",
    description: "Minimalist banking for the modern world — secure, seamless, and smart.",
    url: "https://banksan.com", // Kendi domaininle değiştir
    siteName: "Banksan",
    images: [
      {
        url: "https://banksan.com/og-image.jpg", // OG görselin varsa
        width: 1200,
        height: 630,
        alt: "Banksan – Redefining Your Financial Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banksan",
    description: "Minimalist banking for the modern world — secure, seamless, and smart.",
    images: ["https://banksan.com/og-image.jpg"], // Twitter görseli
  },
  metadataBase: new URL("https://banksan.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/b-cropped.svg" sizes="any" />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${bricolageGrotesque.variable} relative antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}