import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";

// One font for the whole site. "variable" lets Tailwind use it as font-sans.
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans" });

// Shown in the browser tab, in Google results, and in link previews
export const metadata = {
  metadataBase: new URL("https://shadaabhasan.vercel.app"),
  title: {
    default: "Shadaab Hasan | Data Scientist",
    template: "%s | Shadaab Hasan",
  },
  description:
    "Shadaab Hasan is a Data Scientist with an M.Sc. in Computer Science (Data Analytics) from the University of Galway, working on machine learning, computer vision and NLP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${bricolage.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-bg text-ink">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}