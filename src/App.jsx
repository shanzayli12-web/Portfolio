import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import { ThemeProvider } from './context/ThemeContext';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-warm-bg-light dark:bg-warm-bg-dark text-warm-text-light dark:text-warm-text-dark transition-colors duration-300">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectCaseStudy />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
