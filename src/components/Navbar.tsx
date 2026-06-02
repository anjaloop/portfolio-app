import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="portfolio-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-200/30 dark:border-zinc-800/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a
              id="nav-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="text-lg sm:text-xl font-display font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Anjali<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </a>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex space-x-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  id={`nav-link-${link.href.replace("#", "")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm font-sans font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              id="theme-toggle-desktop"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={toggleTheme}
              className="p-2 mr-1 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-hidden transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </motion.button>
          </div>

          {/* Mobile navigation button group */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Dark Mode Toggle - Mobile always accessible */}
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-hidden"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-mobile-${link.href.replace("#", "")}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-base font-sans font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
