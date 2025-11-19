import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// IMPORT BOTH new components
import DesktopSidebar from "../app/components/DesktopSidebar";
import MobileNav from "../app/components/MobileNav"; // Assuming you save it here

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
        {/*
          FIX: Use 'flex' by default (which is flex-row for desktop screens) 
          and explicitly use 'flex-col' for small screens, 
          OR stick to the original logic and ensure no hidden mobile element is shifting things.

          Let's use the explicit desktop/mobile split:
          'flex-col' for small screens, 'lg:flex-row' for large screens.
        */}
        <div className="flex flex-col h-screen bg-background text-white lg:flex lg:flex-row relative">
          
          {/* Desktop Sidebar */}
          <DesktopSidebar />

          {/* Main Content Area */}
          {/* Ensure main starts at the top of the remaining space */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 pb-24 lg:pb-0">
            {children}
          </main>
          
          {/* Mobile Navigation */}
          <MobileNav />

        </div>
      </body>
    </html>
  );
}