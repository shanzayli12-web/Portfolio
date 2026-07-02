import React from 'react';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { identityData } from '../data/projects';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { contact } = identityData;

  return (
    <section className="py-24 px-6 border-t border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light dark:bg-warm-bg-dark">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-warm-accent px-3 py-1 bg-warm-accent/10 dark:bg-warm-accent/20 rounded-full border border-warm-accent/10">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-warm-text-light dark:text-warm-text-dark font-editorial">
            Let's build something together.
          </h2>
          <p className="text-sm md:text-base text-warm-text-light/70 dark:text-warm-text-dark/70 max-w-xl mx-auto font-light leading-relaxed font-sans">
            I am always open to discussing new projects, backend integrations, elegant frontends, or opportunities to collaborate. Drop me an email or find me online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4"
        >
          <a 
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 text-xl md:text-3xl font-medium font-editorial text-warm-text-light dark:text-warm-text-dark hover:text-warm-accent dark:hover:text-warm-accent border-b-2 border-warm-border-light dark:border-warm-border-dark hover:border-warm-accent dark:hover:border-warm-accent transition-all duration-300 pb-2 group"
          >
            {contact.email}
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5] group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent transition-all duration-200 group"
          >
            <Linkedin className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <span className="underline-draw">LinkedIn</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent transition-all duration-200 group"
          >
            <Github className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <span className="underline-draw">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
