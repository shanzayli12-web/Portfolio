import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { identityData } from '../data/projects';
import { motion } from 'framer-motion';

export default function Hero() {
  const { name, title, valueProp, contact } = identityData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 16 }
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center py-24 px-6 overflow-hidden">
      {/* Background glow decorator */}
      <div className="absolute inset-0 z-0 pointer-events-none radial-glow-light dark:radial-glow-dark" />

      <motion.div 
        className="max-w-4xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={itemVariants}>
          <span className="text-xs font-semibold tracking-widest uppercase text-warm-accent px-4 py-1.5 bg-warm-accent/10 dark:bg-warm-accent/20 rounded-full border border-warm-accent/20">
            {title}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-warm-text-light dark:text-warm-text-dark mb-6 leading-[1.08] font-editorial"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-accent via-warm-text-light to-warm-accent dark:from-warm-accent dark:via-warm-text-dark dark:to-warm-accent bg-[length:200%_auto] animate-[pulse_6s_infinite]">{name}</span>.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-warm-text-light/80 dark:text-warm-text-dark/80 leading-relaxed font-light mb-10 max-w-3xl font-sans"
          variants={itemVariants}
        >
          {valueProp}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <Link to="/projects" className="w-full sm:w-auto">
            <motion.div 
              className="w-full sm:w-auto px-8 py-4 bg-warm-accent hover:bg-warm-accent-hover text-warm-bg-light dark:text-warm-text-dark font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2]" />
            </motion.div>
          </Link>
          
          <a href={`mailto:${contact.email}`} className="w-full sm:w-auto">
            <motion.div 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-warm-border-light dark:border-warm-border-dark text-warm-text-light dark:text-warm-text-dark hover:bg-warm-border-light/40 dark:hover:bg-warm-border-dark/40 font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 stroke-[1.5]" />
              Get in Touch
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
