import { ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { developerDetails } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="space-y-6 lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-500/20">
                Available for New Opportunities
              </span>
            </motion.div>

            <motion.h1
              id="hero-name-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Hi, I'm{""}
              <span className="block mt-1 sm:inline sm:mt-0 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                {developerDetails.name}
              </span>
            </motion.h1>

            <motion.p
              id="hero-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl font-sans font-medium text-zinc-700 dark:text-zinc-300"
            >
              {developerDetails.title}
            </motion.p>

            <motion.p
              id="hero-intro-text"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans"
            >
              {developerDetails.intro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo("#projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-sans font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer group"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo("#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-sans font-semibold text-zinc-800 dark:text-white bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:bg-zinc-100 transition-all shadow-xs cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Hero Right Avatar Visualizer */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Spinning / Glowing Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 opacity-20 dark:opacity-30 blur-md animate-pulse" />
              
              {/* Framed Image Container with responsive hover effects */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900 group">
                <img
                  id="hero-profile-avatar"
                  src={developerDetails.profileImage}
                  alt={developerDetails.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Tint Overlay on Cover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Float Card Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-4 -right-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                 Student Developer | Open to Opportunities
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
