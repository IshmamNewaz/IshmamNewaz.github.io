import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { initialPortfolioData } from './data/portfolioData';

import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProjectModal from './components/ProjectModal';
import CustomizerModal from './components/CustomizerModal';
import ResumeModal from './components/ResumeModal';

function PortfolioApp() {
  const { currentTheme } = useTheme();
  
  // Persist portfolio data edits to localStorage
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_user_data_v5');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.personal?.name === 'Ishmam Newaz' && parsed.projects?.some(p => p.image === '/earthquake_simulator.jpg')) {
          return parsed;
        }
      } catch (e) {
        // Fallback to initial
      }
    }
    return initialPortfolioData;
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleUpdateData = (newData) => {
    setData(newData);
    localStorage.setItem('portfolio_user_data_v5', JSON.stringify(newData));
  };

  return (
    <div className={`min-h-screen relative selection:bg-indigo-500 selection:text-white transition-colors duration-300 ${currentTheme.bgClass}`}>
      
      {/* Interactive Constellation Particle Canvas */}
      <CanvasBackground />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar 
          data={data} 
          onOpenCustomizer={() => setIsCustomizerOpen(true)} 
        />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero 
            data={data} 
            onOpenResumeModal={() => setIsResumeOpen(true)} 
          />

          <About data={data} />

          <Skills data={data} />

          <Projects 
            data={data} 
            onSelectProject={(proj) => setSelectedProject(proj)} 
          />

          <Experience data={data} />

          <Testimonials data={data} />

          <Contact data={data} />
        </main>

        {/* Footer */}
        <Footer data={data} />

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Live Profile Customizer Drawer */}
      {isCustomizerOpen && (
        <CustomizerModal
          data={data}
          onUpdateData={handleUpdateData}
          onClose={() => setIsCustomizerOpen(false)}
        />
      )}

      {/* Resume Modal */}
      {isResumeOpen && (
        <ResumeModal
          data={data}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
