import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { identityData } from '../data/projects';

export default function Footer() {
  const { contact, name } = identityData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-warm-border-light dark:border-warm-border-dark py-12 mt-auto bg-warm-bg-light/20 dark:bg-warm-bg-dark/20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-editorial text-base text-warm-text-light dark:text-warm-text-dark font-semibold">
            {name}
          </p>
          <p className="text-xs text-warm-muted-light dark:text-warm-muted-dark">
            &copy; {currentYear} &bull; Crafted with React, Tailwind &amp; Motion
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent dark:hover:text-warm-accent transition-all duration-200 group"
            aria-label="Email Shanzay"
          >
            <Mail className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <span className="underline-draw">Email</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent dark:hover:text-warm-accent transition-all duration-200 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <span className="underline-draw">LinkedIn</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-accent dark:hover:text-warm-accent transition-all duration-200 group"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <span className="underline-draw">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
