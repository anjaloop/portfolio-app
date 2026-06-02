import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0 origin-left"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-800"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/40 dark:border-zinc-800/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro-Interaction Highlight Overlay */}
                <div className="absolute inset-0 bg-zinc-950/10 dark:bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 space-y-4">
                
                {/* Title & Desc */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-sans text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-mono font-medium bg-zinc-150 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Button Row */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40">
                 
                  <a
                    id={`project-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-sm font-sans font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
                    aria-label="View source code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
