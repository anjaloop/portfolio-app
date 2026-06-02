import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { developerDetails } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="portfolio-footer"
      className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/55 py-12 transition-colors duration-300 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand branding info */}
          <div className="text-center md:text-left space-y-2">
            <a
              id="footer-logo"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg sm:text-xl font-display font-bold text-zinc-900 dark:text-white"
            >
              Anjali<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </a>
            <p className="text-xs sm:text-sm font-sans text-zinc-450 dark:text-zinc-500">
              Coded with precision engineering and client-side reactive fluidity.
            </p>
          </div>

          {/* Social Channels Row */}
          <div className="flex items-center justify-center space-x-4">
            <a
              id="footer-social-github"
              href={developerDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-300 hover:text-blue-650 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-2xs hover:shadow-xs"
              aria-label="GitHub Profile Link"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="footer-social-linkedin"
              href={developerDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-300 hover:text-blue-650 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-2xs hover:shadow-xs"
              aria-label="LinkedIn Profile Link"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="footer-social-instagram"
              href={developerDetails.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-300 hover:text-blue-650 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-2xs hover:shadow-xs"
              aria-label="Instagram Profile Link"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              id="footer-social-email"
              href={developerDetails.socials.email}
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-300 hover:text-blue-650 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-2xs hover:shadow-xs"
              aria-label="Email Link"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright / Back to Top Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-sans font-medium text-zinc-400 dark:text-zinc-500 order-2 sm:order-1">
              &copy; {currentYear} {developerDetails.name}. All rights reserved.
            </span>
            <button
              id="footer-scroll-top"
              onClick={handleScrollToTop}
              className="cursor-pointer inline-flex items-center justify-center p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 transition-colors shadow-2xs order-1 sm:order-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
