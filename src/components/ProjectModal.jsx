import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './Icons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal({ project, onClose }) {
  const { currentTheme, playSound } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/70 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Modal Header & Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md"
          style={{
            backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="flex items-center gap-2.5 flex-wrap">
            <span 
              className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{
                backgroundColor: project.projectType === 'Case Study' ? '#f59e0b' : currentTheme.primaryHex
              }}
            >
              {project.projectType || 'Research Project'}
            </span>
            <span 
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${currentTheme.primaryHex}20`,
                color: currentTheme.primaryHex
              }}
            >
              {project.category}
            </span>
            <h3 className="font-bold text-lg">{project.title}</h3>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-2 rounded-xl border transition-colors hover:bg-slate-500/20"
            style={{
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Preview Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border shadow-lg"
            style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold font-mono border"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-transform hover:scale-105"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Github size={15} />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
                  }}
                >
                  <span>Live Preview</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Deep Dive Description */}
          <div>
            <h4 className="text-base font-bold mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-400" />
              <span>Project Overview & Architecture</span>
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Impact Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BarChart3 size={14} />
                <span>Performance & Results</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl border text-center"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div 
                      className="text-2xl font-black font-mono text-transparent bg-clip-text"
                      style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Technical Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers size={14} />
                <span>Key Technical Solutions</span>
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl border"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.8)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className={`text-xs sm:text-sm ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
