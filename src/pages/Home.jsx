import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import { projectsData } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';

export default function Home() {
  useSEO({
    title: 'Software Engineer',
    description: 'Personal portfolio of Shanzay Ali Khan, software engineer specializing in frontend architectures, React, TypeScript, and microservice containerization.'
  });

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Hero />
      <About />
      
      {/* Featured Projects Preview Section */}
      <section className="py-24 px-6 border-t border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/20 dark:bg-warm-bg-dark/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-warm-accent px-3 py-1 bg-warm-accent/10 dark:bg-warm-accent/20 rounded-full border border-warm-accent/10">
                Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-warm-text-light dark:text-warm-text-dark font-editorial mt-3">
                Featured Work
              </h2>
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-warm-text-light/80 dark:text-warm-text-dark/80 hover:text-warm-accent transition-colors duration-200 group"
            >
              <span className="underline-draw">View all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="max-w-3xl">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}
