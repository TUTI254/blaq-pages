import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Footer from "@/components/footer";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Blaq Pages",
  description: "Welcome to Blaq Pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${anton.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
