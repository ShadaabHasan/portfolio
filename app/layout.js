// 'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"



const inter = Inter({
  subsets: ["latin"]
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Shadaab Hasan | Portfolio",
  description: "",
  icons: {
    icon:"/favicon.ico"
  },
};



export default function RootLayout({ children }) {


  // Define page-specific classes
 
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
