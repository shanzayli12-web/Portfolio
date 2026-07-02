import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-warm-bg-light/80 dark:bg-warm-bg-dark/80 backdrop-blur-md border-b border-warm-border-light dark:border-warm-border-dark' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-editorial text-lg md:text-xl tracking-tight text-warm-text-light dark:text-warm-text-dark font-medium group flex items-center gap-2"
        >
          <motion.span 
            className="text-warm-accent inline-block"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            🍂
          </motion.span>
          <span className="hover:text-warm-accent transition-colors duration-200">Shanzay Ali Khan</span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium tracking-wide transition-all duration-200 underline-draw py-1 ${
              isActive('/') 
                ? 'text-warm-accent' 
                : 'text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-text-light dark:hover:text-warm-text-dark'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-medium tracking-wide transition-all duration-200 underline-draw py-1 ${
              isActive('/projects')
                ? 'text-warm-accent' 
                : 'text-warm-text-light/75 dark:text-warm-text-dark/75 hover:text-warm-text-light dark:hover:text-warm-text-dark'
            }`}
          >
            Projects
          </Link>
          <div className="pl-2 border-l border-warm-border-light dark:border-warm-border-dark">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
