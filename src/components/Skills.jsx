import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Layers, 
  Code, 
  Server, 
  Cloud, 
  Bot, 
  Cpu, 
  Database, 
  FileCode, 
  Palette, 
  Radio, 
  Terminal, 
  Share2, 
  HardDrive, 
  Box, 
  CloudRain, 
  GitBranch, 
  Boxes, 
  Settings, 
  Network, 
  GitPullRequest, 
  CheckCircle, 
  Layout, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills({ data }) {
  const { currentTheme, playSound } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 
    'AI & Machine Learning', 
    'Robotics & Embedded', 
    'Full-Stack & Web', 
    'Databases & Cloud'
  ];

  const iconMap = {
    Code: <Code size={20} />,
    FileCode: <FileCode size={20} />,
    Palette: <Palette size={20} />,
    Layers: <Layers size={20} />,
    Cpu: <Cpu size={20} />,
    Radio: <Radio size={20} />,
    Server: <Server size={20} />,
    Terminal: <Terminal size={20} />,
    Database: <Database size={20} />,
    Share2: <Share2 size={20} />,
    HardDrive: <HardDrive size={20} />,
    Box: <Box size={20} />,
    Cloud: <Cloud size={20} />,
    CloudRain: <CloudRain size={20} />,
    GitBranch: <GitBranch size={20} />,
    Boxes: <Boxes size={20} />,
    Settings: <Settings size={20} />,
    Bot: <Bot size={20} />,
    Network: <Network size={20} />,
    GitPullRequest: <GitPullRequest size={20} />,
    CheckCircle: <CheckCircle size={20} />,
    Layout: <Layout size={20} />,
    Sparkles: <Sparkles size={20} />,
    Zap: <Zap size={20} />
  };

  const filteredSkills = useMemo(() => {
    return (data.skills || []).filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data.skills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${currentTheme.primaryHex}15`,
              color: currentTheme.primaryHex
            }}
          >
            <Cpu size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Skills & Competencies
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A curated breakdown of AI frameworks, robotics toolchains, edge hardware, and infrastructure technologies.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Filter Toolbar: Categories + Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
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

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, ROS, CCNA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border outline-hidden transition-all focus:ring-2"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                color: currentTheme.isDark ? '#f8fafc' : '#0f172a'
              }}
            />
          </div>

        </div>

        {/* Skills Grid - Clean Cards without Progress Bars or Percentages */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => playSound('hover')}
                className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex items-center gap-4 min-h-[96px]"
                style={{
                  backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.55)' : 'rgba(255, 255, 255, 0.9)',
                  borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Icon Container with Theme Glow on Hover */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shrink-0 shadow-xs"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(241, 245, 249, 0.95)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
                    color: currentTheme.primaryHex
                  }}
                >
                  {iconMap[skill.icon] || <Code size={20} />}
                </div>

                {/* Skill Name & Category Badge */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm sm:text-base leading-snug group-hover:text-indigo-400 transition-colors break-words">
                    {skill.name}
                  </h4>
                  <div className="mt-1 flex items-center gap-2">
                    <span 
                      className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border"
                      style={{
                        backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
                        borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                        color: currentTheme.isDark ? '#94a3b8' : '#64748b'
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Subtle verified check icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle size={16} className="text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
