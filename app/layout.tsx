import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../app/components/Sidebar";

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
        <div className="flex h-screen bg-background text-white">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}