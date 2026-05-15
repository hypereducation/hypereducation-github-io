import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HyperEducation — Data skills. Life-changing opportunities.",
    template: "%s | HyperEducation",
  },
  description:
    "HyperEducation is a non-profit helping students from underprivileged backgrounds upskill in Microsoft Fabric and Power BI to break into data careers.",
  keywords: [
    "Microsoft Fabric",
    "Power BI",
    "data careers",
    "non-profit",
    "upskilling",
    "data analytics",
    "free training",
  ],
  openGraph: {
    siteName: "HyperEducation",
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
      className={`${dmSerif.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6EF] text-stone-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
