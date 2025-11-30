import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// IMPORT BOTH new components
import DesktopSidebar from "../app/components/DesktopSidebar";
import MobileNav from "../app/components/MobileNav"; 
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishita Agarwal - Blockchain Developer",
  description: "Portfolio of a passionate blockchain developer specializing in Web3 and DeFi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-background text-white lg:flex lg:flex-row relative">
          
          <DesktopSidebar />

          <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 pb-24 lg:pb-0">
            {children}
             <Analytics />
          </main>
          
          {/* Mobile Navigation */}
          <MobileNav />

        </div>
      </body>
    </html>
  );
}