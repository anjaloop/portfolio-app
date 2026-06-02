import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData } from "../data";
import { Cpu, Layout, Layers } from "lucide-react";

export default function Skills() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  return (
    <section
      id="skills"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative border-t border-zinc-100 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0 origin-left"
          />
        </div>

        {/* Filter Navigation Options */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
          <button
            id="filter-skills-all"
            onClick={() => setFilter('all')}
            className={`cursor-pointer inline-flex items-center px-4 py-2 rounded-xl text-sm font-sans font-semibold transition-all shadow-xs ${
              filter === 'all'
                ? "bg-blue-600 text-white dark:bg-blue-500 shadow-md"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            }`}
          >
            <Layers className="w-4 h-4 mr-1.5" />
            All Skills
          </button>
          <button
            id="filter-skills-frontend"
            onClick={() => setFilter('frontend')}
            className={`cursor-pointer inline-flex items-center px-4 py-2 rounded-xl text-sm font-sans font-semibold transition-all shadow-xs ${
              filter === 'frontend'
                ? "bg-blue-600 text-white dark:bg-blue-500 shadow-md"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            }`}
          >
            <Layout className="w-4 h-4 mr-1.5" />
            Frontend UI
          </button>
          
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[350px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-800 dark:text-zinc-100">
                      {skill.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-2xs font-mono font-medium tracking-wider uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-300">
                        {skill.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar Track with detailed active fills */}
                  <div className="w-full h-3 rounded-full bg-zinc-150 dark:bg-zinc-800/80 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                    />
                  </div>
                </div>

                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-sans mt-3">
                  Extensive production experience utilizing best-practice application paradigms.
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
