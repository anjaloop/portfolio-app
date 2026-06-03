import { FileDown, Calendar, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { developerDetails, experienceHighlights } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 relative border-t border-zinc-100 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0 origin-left"
          />
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Background & Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-800 dark:text-zinc-200">
              A brief dive into my journey, passion, and engineering approach
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              {developerDetails.aboutText}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              I believe in clean, expressive codebases, responsive fluidity across viewport grids, and rigorous separation of concerns. From low-latency backend interactions to rich pixel transitions, I enjoy resolving critical challenges with maintainable, testable software.
            </p>

            {/* Resume Download Action */}
            <div className="pt-4">
              <a
                id="about-resume-download"
                href="./assets/pdf/resume.pdf" // Placeholder link
                onClick={(e) => {
                  e.preventDefault();
                  alert("Anjali Omble's Professional CV Download started! (Demoware Placeholder Triggered)");
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-sans font-semibold text-white bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:active:bg-zinc-300 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <FileDown className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Column 2: Highlights / Career Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 font-bold" />
              Career Highlights
            </h3>

            {/* Career Timeline Cards */}
            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 space-y-8 pl-6 sm:pl-8">
              {experienceHighlights.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  id={`experience-card-${exp.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                  className="relative p-6 sm:p-8 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm backdrop-blur-md group hover:border-blue-500/35 dark:hover:border-blue-400/35 transition-all duration-300"
                >
                  {/* Timeline indicator point */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-6 w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-zinc-900 group-hover:scale-125 transition-transform duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-sans font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-150 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-sans font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {exp.company}
                  </p>
                  
                  <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
