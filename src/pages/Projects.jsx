import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';

export default function Projects() {
  useSEO({
    title: 'Projects',
    description: 'An index of software engineering projects, including full-stack microservices platforms and code experiments by Shanzay Ali Khan.'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 16 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="pt-36 pb-24 px-6 min-h-[90vh]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-warm-accent px-3 py-1 bg-warm-accent/10 dark:bg-warm-accent/20 rounded-full border border-warm-accent/10">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-warm-text-light dark:text-warm-text-dark font-editorial mt-4 mb-4">
            Selected Projects
          </h1>
          <p className="text-sm md:text-base text-warm-text-light/70 dark:text-warm-text-dark/70 font-light max-w-xl leading-relaxed">
            A curated log of systems I've architected and interfaces I've crafted. Here you will find microservice platforms, infrastructure scripts, and web designs.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projectsData.map((project) => (
            <motion.div key={project.slug} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
