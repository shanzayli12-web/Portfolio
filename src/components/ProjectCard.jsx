import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const isPlaceholder = project.slug.includes('coming-soon');

  const CardContent = () => (
    <div className="flex flex-col h-full p-6 md:p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-warm-text-light dark:text-warm-text-dark font-editorial mb-1">
            {project.name}
          </h3>
          <p className="text-xs text-warm-accent font-semibold tracking-wide uppercase">
            {project.tagline}
          </p>
        </div>
        {!isPlaceholder && (
          <div className="p-2 rounded-full border border-warm-border-light dark:border-warm-border-dark group-hover:bg-warm-accent group-hover:border-warm-accent group-hover:text-warm-bg-light dark:group-hover:text-warm-text-dark transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
          </div>
        )}
      </div>

      <p className="text-sm text-warm-text-light/70 dark:text-warm-text-dark/70 leading-relaxed mb-6 font-light flex-grow">
        {project.overview}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-warm-bg-light/60 dark:bg-warm-bg-dark/60 border border-warm-border-light dark:border-warm-border-dark text-warm-text-light/80 dark:text-warm-text-dark/80 px-2.5 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  if (isPlaceholder) {
    return (
      <div 
        className="h-full rounded-xl border border-dashed border-warm-border-light/80 dark:border-warm-border-dark/80 bg-warm-bg-light/10 dark:bg-warm-bg-dark/10 opacity-70 relative select-none"
      >
        <CardContent />
        <div className="absolute inset-0 flex items-center justify-center bg-warm-bg-light/5 dark:bg-warm-bg-dark/5 backdrop-blur-[1px] rounded-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-warm-text-light/60 dark:text-warm-text-dark/60 border border-warm-border-light dark:border-warm-border-dark px-3 py-1.5 bg-warm-bg-light dark:bg-warm-bg-dark rounded-md shadow-sm">
            Coming Soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/projects/${project.slug}`} className="block h-full group">
      <motion.div 
        className="h-full rounded-xl border border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/40 dark:bg-warm-bg-dark/40 hover:bg-warm-bg-light dark:hover:bg-warm-bg-dark hover:border-warm-accent dark:hover:border-warm-accent transition-all duration-300 overflow-hidden relative shadow-sm hover:shadow-md cursor-pointer"
        whileHover={{ y: -4 }}
      >
        <CardContent />
      </motion.div>
    </Link>
  );
}
