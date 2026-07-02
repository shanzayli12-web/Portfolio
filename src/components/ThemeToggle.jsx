import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-warm-border-light dark:border-warm-border-dark bg-warm-bg-light/40 dark:bg-warm-bg-dark/40 text-warm-text-light dark:text-warm-text-dark hover:bg-warm-border-light dark:hover:bg-warm-border-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 dark:focus:ring-offset-warm-bg-dark"
      aria-label="Toggle dark/light theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[1.5] text-warm-accent" />
      ) : (
        <Moon className="w-4 h-4 stroke-[1.5] text-warm-text-light" />
      )}
    </motion.button>
  );
}
