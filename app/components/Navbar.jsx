'use client'

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// The menu links, written once and used for both desktop and mobile
const links = [
  { label: "Projects", href: "/AllProjects" },
  { label: "About", href: "/AboutMe" },
  { label: "Contact", href: "#contact" },
  { label: "CV", href: "/Shadaab_resume.pdf", external: true },
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
      <nav className="px-[4vw] py-8 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className="font-extrabold text-[22px] tracking-[-0.04em] text-ink">
          SH
        </Link>

        {/* Desktop links, in the middle */}
        <div className="hidden md:flex items-center gap-10 text-[17px]">
          {links.map((link) => (
            <NavLink key={link.label} link={link} className="text-muted hover:text-ink transition-colors" />
          ))}
        </div>

        {/* Right side: theme switch, plus the menu button on phones */}
        <div className="justify-self-end flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-ink text-2xl"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
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
            className="fixed inset-0 z-50 bg-bg flex flex-col px-[4vw]"
          >
            <div className="py-8 flex items-center justify-between">
              <span className="font-extrabold text-[22px] tracking-[-0.04em] text-ink">SH</span>
              <button
                className="w-10 h-10 flex items-center justify-center text-ink text-2xl"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 pt-8 text-4xl font-bold tracking-tight">
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