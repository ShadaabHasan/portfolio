import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Shown in the browser tab, in Google results, and in link previews
export const metadata = {
   title: {
    default: "Shadaab Hasan | Data Scientist",
    template: "%s | Shadaab Hasan",
  },
  description:
    "Shadaab Hasan is a Data Scientist with an M.Sc. in Computer Science (Data Analytics) from the University of Galway, working on machine learning, computer vision and NLP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}