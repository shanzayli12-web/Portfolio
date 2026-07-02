import React from 'react';
import { Code, Terminal, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const skillsList = [
    {
      icon: <Layers className="w-5 h-5 text-warm-accent" />,
      title: 'Frontend Craftsmanship',
      desc: 'Expertise in building scalable, component-based architectures with React, TypeScript, and modern responsive CSS.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-warm-accent" />,
      title: 'Polyglot Stack Integration',
      desc: 'Adaptable to project demands across the stack, with experience engineering backends in Python (FastAPI/Django).'
    },
    {
      icon: <Code className="w-5 h-5 text-warm-accent" />,
      title: 'Solid Core Fundamentals',
      desc: 'Deep focus on web standards, layout performance, accessibility (a11y), clean API designs, and containerized dev environments.'
    }
  ];

  return (
    <section className="py-24 px-6 border-t border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/10 dark:bg-warm-bg-dark/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-warm-text-light dark:text-warm-text-dark font-editorial md:sticky md:top-28">
              About Me
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <p className="text-lg md:text-xl text-warm-text-light/80 dark:text-warm-text-dark/80 leading-relaxed font-light">
              I view development not as a commitment to a single framework or language, but as a discipline of problem-solving. My engineering philosophy centers on learning rapidly, writing clean, well-tested systems, and polishing the user-facing details that elevate interfaces from functional to delightful.
            </p>
            
            <p className="text-sm md:text-base text-warm-text-light/70 dark:text-warm-text-dark/70 leading-relaxed font-light">
              Whether optimizing GraphQL endpoints, integrating microservices, containerizing development environments, or animating interfaces with pixel-perfect layouts, I approach every challenge with high craftsmanship and structured execution.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-6">
              {skillsList.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 p-6 rounded-lg border border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/30 dark:bg-warm-bg-dark/30 hover:border-warm-accent dark:hover:border-warm-accent hover:bg-warm-bg-light/60 dark:hover:bg-warm-bg-dark/60 transition-all duration-200"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-text-light dark:text-warm-text-dark mb-1 text-base">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-warm-text-light/70 dark:text-warm-text-dark/70 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
