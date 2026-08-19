import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Sparkles 
} from 'lucide-react';
import { Github, Linkedin, Twitter, GoogleScholar } from './Icons';
import { useTheme } from '../context/ThemeContext';

export default function Footer({ data }) {
  const { currentTheme, playSound } = useTheme();

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10"
      style={{
        backgroundColor: currentTheme.isDark ? 'rgba(10, 15, 30, 0.95)' : 'rgba(248, 250, 252, 0.95)',
        borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-white text-sm font-black"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              }}
            >
              {data.personal.name ? data.personal.name.charAt(0) : 'I'}
            </div>
            <span>{data.personal.name}</span>
          </div>

          <p className="text-xs text-slate-400 max-w-sm mb-4">
            {data.personal.tagline}
          </p>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            <span>© {new Date().getFullYear()} {data.personal.name}. Designed & Built with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500 inline" />
            <span>using React, Vite & Tailwind CSS.</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          <a href="#about" onClick={() => playSound('hover')} className="hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={() => playSound('hover')} className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" onClick={() => playSound('hover')} className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" onClick={() => playSound('hover')} className="hover:text-white transition-colors">Experience</a>
          <a href="#testimonials" onClick={() => playSound('hover')} className="hover:text-white transition-colors">Reviews</a>
          <a href="#contact" onClick={() => playSound('hover')} className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {data.personal.github && (
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('hover')}
                className="p-2 rounded-lg border border-slate-700/60 hover:text-white hover:border-slate-500 transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {data.personal.linkedin && (
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('hover')}
                className="p-2 rounded-lg border border-slate-700/60 hover:text-blue-400 hover:border-slate-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            )}
            {data.personal.googleScholar && (
              <a
                href={data.personal.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('hover')}
                className="p-2 rounded-lg border border-slate-700/60 hover:text-blue-300 hover:border-slate-500 transition-colors"
                title="Google Scholar"
              >
                <GoogleScholar size={16} />
              </a>
            )}
            {data.personal.email && (
              <a
                href={`mailto:${data.personal.email}`}
                onClick={() => playSound('hover')}
                className="p-2 rounded-lg border border-slate-700/60 hover:text-emerald-400 hover:border-slate-500 transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border font-semibold text-xs transition-all hover:scale-105"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
            }}
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
