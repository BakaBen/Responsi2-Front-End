import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MangaList",
  description: "Rekomendasi Manga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 pl-4">
          <div className="md:col-span-3 col-span-1">
            {children}
          </div>
          <div className="md:col-span-1 col-span-1">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}