import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';

function ArchitectureDiagram() {
  return (
    <div className="w-full border border-warm-border-light dark:border-warm-border-dark rounded-xl bg-warm-bg-light/20 dark:bg-warm-bg-dark/20 p-6 md:p-8 font-mono text-xs select-none">
      <div className="text-center mb-8 font-editorial font-bold text-warm-text-light dark:text-warm-text-dark text-xs tracking-wider uppercase">
        Orchestration Architecture Schema
      </div>
      
      <div className="flex flex-col items-center gap-6">
        {/* Tier 1: Client */}
        <div className="flex flex-col items-center">
          <div className="border border-warm-accent text-warm-accent px-5 py-2.5 rounded bg-warm-accent/5 font-semibold text-center w-52 shadow-sm">
            Frontend Client
            <div className="text-[10px] text-warm-text-light/50 dark:text-warm-text-dark/50 font-normal mt-0.5">React + Vite</div>
          </div>
          <div className="h-6 w-0.5 bg-warm-accent/40 my-1 animate-pulse" />
        </div>

        {/* Tier 2: Gateway & API */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Apollo Server Gateway */}
          <div className="flex flex-col items-center">
            <div className="border border-warm-text-light dark:border-warm-text-dark text-warm-text-light dark:text-warm-text-dark px-5 py-2.5 rounded bg-warm-bg-light dark:bg-warm-bg-dark w-52 text-center relative">
              GraphQL Gateway
              <div className="text-[10px] text-warm-muted-light dark:text-warm-muted-dark font-normal mt-0.5">Apollo Server 4</div>
              
              {/* Redis link */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="border border-warm-accent/30 text-warm-accent px-2 py-1 rounded text-[9px] bg-warm-accent/5">
                    Redis Cache
                  </div>
                  <div className="w-4 h-0.5 bg-warm-accent/30" />
                </div>
              </div>
            </div>
            <div className="h-6 w-0.5 bg-warm-border-light dark:bg-warm-border-dark" />
          </div>

          {/* REST API */}
          <div className="flex flex-col items-center">
            <div className="border border-warm-border-light dark:border-warm-border-dark text-warm-text-light/80 dark:text-warm-text-dark/80 px-5 py-2.5 rounded bg-warm-bg-light/40 dark:bg-warm-bg-dark/40 w-52 text-center">
              Jobs REST API
              <div className="text-[10px] text-warm-muted-light dark:text-warm-muted-dark font-normal mt-0.5">Express Service</div>
            </div>
            <div className="h-6 w-0.5 bg-warm-border-light dark:bg-warm-border-dark" />
          </div>
        </div>

        {/* Tier 3: gRPC Services Container */}
        <div className="border border-warm-border-light dark:border-warm-border-dark rounded-lg p-6 bg-warm-bg-light/10 dark:bg-warm-bg-dark/10 w-full max-w-xl">
          <div className="text-center text-[10px] uppercase tracking-wider text-warm-muted-light dark:text-warm-muted-dark mb-4">
            gRPC Microservices (Ports 50051–50053)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-warm-border-light dark:border-warm-border-dark text-center p-3 rounded bg-warm-bg-light dark:bg-warm-bg-dark">
              User Service
              <div className="text-[9px] text-warm-accent font-semibold mt-1">Port 50051</div>
            </div>
            <div className="border border-warm-border-light dark:border-warm-border-dark text-center p-3 rounded bg-warm-bg-light dark:bg-warm-bg-dark">
              Application Service
              <div className="text-[9px] text-warm-accent font-semibold mt-1">Port 50052</div>
            </div>
            <div className="border border-warm-border-light dark:border-warm-border-dark text-center p-3 rounded bg-warm-bg-light dark:bg-warm-bg-dark">
              Notification
              <div className="text-[9px] text-warm-accent font-semibold mt-1">Port 50053</div>
            </div>
          </div>
        </div>

        <div className="h-6 w-0.5 bg-warm-border-light dark:bg-warm-border-dark" />

        {/* Tier 4: DB */}
        <div className="flex flex-col items-center">
          <div className="border border-warm-text-light dark:border-warm-text-dark text-warm-text-light dark:text-warm-text-dark px-6 py-3 rounded-lg bg-warm-bg-light dark:bg-warm-bg-dark text-center w-52 shadow-sm">
            PostgreSQL DB
            <div className="text-[10px] text-warm-muted-light dark:text-warm-muted-dark font-normal mt-0.5">Persistent Storage</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useSEO({
    title: project ? `${project.name} Case Study` : 'Case Study',
    description: project ? project.overview : 'Case study description.'
  });

  if (!project || project.slug.includes('coming-soon')) {
    return (
      <div className="pt-36 pb-24 px-6 min-h-[85vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold font-editorial text-warm-text-light dark:text-warm-text-dark mb-4">
          Case Study In Development
        </h1>
        <p className="text-sm text-warm-text-light/70 dark:text-warm-text-dark/70 max-w-sm mb-8 font-light">
          This case study is not available or is currently being drafted. Explore other projects in the index.
        </p>
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-warm-accent hover:text-warm-accent-hover transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2]" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="pt-36 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform stroke-[2]" />
            Back to Projects
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-16 border-b border-warm-border-light dark:border-warm-border-dark pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-warm-accent px-3 py-1 bg-warm-accent/10 dark:bg-warm-accent/20 rounded-full border border-warm-accent/10">
              Case Study
            </span>
            <span className="text-xs text-warm-muted-light dark:text-warm-muted-dark font-light font-mono">
              {project.timeline}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-warm-text-light dark:text-warm-text-dark font-editorial mb-4 leading-tight">
            {project.name}
          </h1>
          
          <p className="text-lg md:text-xl text-warm-text-light/80 dark:text-warm-text-dark/80 font-light mb-8 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-warm-bg-light/60 dark:bg-warm-bg-dark/60 border border-warm-border-light dark:border-warm-border-dark text-warm-text-light/80 dark:text-warm-text-dark/80 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 p-6 rounded-xl border border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/20 dark:bg-warm-bg-dark/20 font-sans">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-warm-muted-light dark:text-warm-muted-dark mb-1">
              Role
            </div>
            <div className="text-sm text-warm-text-light dark:text-warm-text-dark font-medium">
              {project.role}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-warm-muted-light dark:text-warm-muted-dark mb-1">
              Timeline
            </div>
            <div className="text-sm text-warm-text-light dark:text-warm-text-dark font-medium">
              {project.timeline}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-warm-muted-light dark:text-warm-muted-dark mb-1">
              Infrastructure
            </div>
            <div className="text-sm text-warm-text-light dark:text-warm-text-dark font-medium">
              Containerized microservices
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="space-y-12">
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-editorial text-warm-text-light dark:text-warm-text-dark">
              Project Overview
            </h2>
            <p className="text-sm md:text-base text-warm-text-light/80 dark:text-warm-text-dark/80 leading-relaxed font-light">
              {project.overview}
            </p>
          </section>

          {/* Section 2: Problem & Context */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-editorial text-warm-text-light dark:text-warm-text-dark">
              The Engineering Challenge
            </h2>
            <p className="text-sm md:text-base text-warm-text-light/80 dark:text-warm-text-dark/80 leading-relaxed font-light">
              {project.problem}
            </p>
          </section>

          {/* Section 3: Architecture & Gateway */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-editorial text-warm-text-light dark:text-warm-text-dark">
              System Architecture
            </h2>
            <p className="text-sm md:text-base text-warm-text-light/80 dark:text-warm-text-dark/80 leading-relaxed font-light mb-6">
              {project.architecture}
            </p>
            
            {/* Custom Interactive SVG/CSS Architecture Flowchart */}
            <ArchitectureDiagram />
          </section>

          {/* Section 4: Highlights Checklist */}
          <section className="space-y-6 pt-8 border-t border-warm-border-light dark:border-warm-border-dark">
            <h2 className="text-2xl font-bold font-editorial text-warm-text-light dark:text-warm-text-dark">
              Key Implementation Highlights
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-warm-accent flex-shrink-0 mt-0.5 stroke-[1.5]" />
                  <p className="text-sm md:text-base text-warm-text-light/80 dark:text-warm-text-dark/80 font-light leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.article>
  );
}
