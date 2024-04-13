import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS 14 app",
  description: "Next JS 14 app to learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-800 px-5 md:px-10 flex flex-col justify-between min-h-svh">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
