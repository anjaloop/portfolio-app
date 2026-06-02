import React from "react";
import { motion } from "motion/react";
import { servicesData } from "../data";
import { Globe, Smartphone, Palette, Server, ArrowRight } from "lucide-react";

// Safe, compileable icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Palette,
  Server,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative border-t border-zinc-100 dark:border-zinc-800/50"
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
            My Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0 origin-left"
          />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-start gap-6 hover:border-blue-500/20 dark:hover:border-blue-400/20"
              >
                {/* Icon Circle Frame */}
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors duration-300 shrink-0">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Service Details */}
                <div className="space-y-3 flex-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Subtle Learn More / Flow indicator */}
                  <div className="pt-2 flex items-center text-sm font-sans font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 duration-200 transition-all cursor-pointer">
                    <span>Collaborate with me</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
