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

export const metadata: Metadata = {
  title: "Banksan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${bricolageGrotesque.variable} relative antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}