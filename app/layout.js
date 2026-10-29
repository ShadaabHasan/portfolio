import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";
import ContactPanel from "./components/ContactPanel";

// One font for the whole site. "variable" lets Tailwind use it as font-sans.
// const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-bg text-ink">
                <ThemeProvider>
          {/* The page sits on top (z-10) and covers the contact panel until you scroll past the end */}
          <div className="relative z-10 bg-bg shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <Navbar />
            {children}
                    </div>
          {/* Scroll target for "#contact": sits right where the page ends, so jumping here uncovers the panel */}
          <div id="contact" aria-hidden="true" />
          <ContactPanel />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}