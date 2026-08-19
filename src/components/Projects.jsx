import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Layers,
  Eye
} from 'lucide-react';
import { Github } from './Icons';
import { useTheme } from '../context/ThemeContext';

export default function Projects({ data, onSelectProject }) {
  const { currentTheme, playSound } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI & Tools', 'Mobile'];

  const filteredProjects = useMemo(() => {
    return (data.projects || []).filter((proj) => {
      if (selectedCategory === 'All') return true;
      return proj.category === selectedCategory;
    });
  }, [data.projects, selectedCategory]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${currentTheme.primaryHex}15`,
              color: currentTheme.primaryHex
            }}
          >
            <FolderGit2 size={13} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Recent Projects & Case Studies
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore selected production systems, AI applications, open-source engines, and web experiences.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'text-white shadow-lg scale-105'
                    : (currentTheme.isDark ? 'text-slate-300 hover:text-white bg-slate-800/60' : 'text-slate-700 hover:text-slate-900 bg-slate-200/70')
                }`}
                style={isSelected ? {
                  background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`,
                  boxShadow: `0 4px 15px -3px ${currentTheme.glowColor}`
                } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Project Image & Category Pill */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Category & Project Type Pill */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  <span 
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-xs"
                    style={{
                      backgroundColor: project.projectType === 'Case Study' ? 'rgba(245, 158, 11, 0.9)' : 'rgba(99, 102, 241, 0.9)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  >
                    {project.projectType || 'Research Project'}
                  </span>
                  <span 
                    className="px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md border shadow-xs text-slate-200"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
                      color: currentTheme.isDark ? '#e2e8f0' : '#334155'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Quick Details Hover Button */}
                <button
                  onClick={() => {
                    playSound('click');
                    onSelectProject(project);
                  }}
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white backdrop-blur-md border opacity-90 transition-all hover:scale-105 hover:opacity-100"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Eye size={14} />
                  <span>{project.projectType === 'Case Study' ? 'Case Study' : 'Research Overview'}</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => {
                      playSound('click');
                      onSelectProject(project);
                    }}
                    className="text-xl font-bold mb-2.5 cursor-pointer transition-colors group-hover:text-indigo-400"
                  >
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                    currentTheme.isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border"
                        style={{
                          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.9)',
                          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between">
                    <button
                      onClick={() => {
                        playSound('click');
                        onSelectProject(project);
                      }}
                      className="text-xs font-bold flex items-center gap-1 transition-colors hover:underline"
                      style={{ color: currentTheme.primaryHex }}
                    >
                      <span>{project.projectType === 'Case Study' ? 'Case Study' : 'Research Deep Dive'}</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playSound('hover')}
                          className="p-2 rounded-lg border transition-colors hover:text-white hover:bg-slate-500/20"
                          style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
                          title="View Repository"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playSound('hover')}
                          className="p-2 rounded-lg border transition-colors hover:text-indigo-400 hover:bg-slate-500/20"
                          style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
                          title="Live Preview"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
