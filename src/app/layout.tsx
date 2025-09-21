import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav - UI/UX Designer",
  description: "A creative portfolio showcasing the UI/UX design and development work of Vaibhav.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-900 flex flex-col items-center px-2`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
