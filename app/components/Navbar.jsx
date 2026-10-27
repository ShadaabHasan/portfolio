'use client'

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// The menu links, written once and used for both desktop and mobile
const links = [
  { label: "Projects", href: "/AllProjects" },
  { label: "About", href: "/AboutMe" },
  { label: "CV", href: "/Shadaab_resume.pdf", external: true },
  { label: "Contact", href: "/Contact" },
];

function NavLink({ link, className, onClick }) {
  // The CV is a PDF, so it opens in a new tab with a normal <a> link
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-ink">
            Shadaab Hasan
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.label} link={link} className="text-muted hover:text-ink transition-colors" />
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme switch + menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="w-10 h-10 flex items-center justify-center text-ink text-2xl"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
          >
            <div className="h-16 px-5 flex items-center justify-between border-b border-line">
              <span className="font-bold text-ink">Shadaab Hasan</span>
              <button
                className="w-10 h-10 flex items-center justify-center text-ink text-2xl"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 px-5 pt-10 text-3xl font-semibold">
              {links.map((link) => (
                <NavLink key={link.label} link={link} className="text-ink" onClick={() => setIsOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;