import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Experience({ data }) {
  const { currentTheme, playSound } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${currentTheme.primaryHex}15`,
              color: currentTheme.primaryHex
            }}
          >
            <Briefcase size={13} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Experience & Credentials
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Track record of shipping impactful software, driving engineering standards, and lifelong learning.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl border flex items-center gap-1 backdrop-blur-md"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(241, 245, 249, 0.8)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
            }}
          >
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('experience');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'experience'
                  ? 'text-white shadow-lg'
                  : (currentTheme.isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
              }`}
              style={activeTab === 'experience' ? {
                background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              } : {}}
            >
              <Briefcase size={15} />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => {
                playSound('click');
                setActiveTab('education');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'education'
                  ? 'text-white shadow-lg'
                  : (currentTheme.isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
              }`}
              style={activeTab === 'education' ? {
                background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              } : {}}
            >
              <GraduationCap size={15} />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-32 space-y-10">
            {data.experience.map((job, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline node icon */}
                <div 
                  className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center text-white transition-transform group-hover:scale-125"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`,
                    borderColor: currentTheme.isDark ? '#0f172a' : '#ffffff'
                  }}
                >
                  <Briefcase size={14} />
                </div>

                {/* Left Date Label on large screens */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-28 text-xs font-mono font-bold text-slate-400">
                  {job.period}
                </div>

                {/* Card content */}
                <div 
                  className="p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <div className="text-sm font-semibold" style={{ color: currentTheme.primaryHex }}>
                        {job.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="sm:hidden flex items-center gap-1 font-mono">
                        <Calendar size={13} />
                        <span>{job.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        <span>{job.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm mb-6 ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {job.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2.5 mb-6">
                    {job.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <ChevronRight size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span className={`text-xs sm:text-sm leading-relaxed ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills pill list */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/30">
                    {job.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border"
                        style={{
                          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.9)',
                          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Education Degree */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-indigo-400" />
                <span>Academic Degree</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl border relative overflow-hidden"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">{edu.period}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">
                        {edu.honors}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <div className="text-sm text-slate-400 font-medium">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award size={20} className="text-amber-400" />
                <span>Professional Certifications & Digital Badges</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {data.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl border flex flex-col justify-between transition-all hover:scale-[1.02] shadow-md"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                        <Award size={20} />
                      </div>
                      <h4 className="font-bold text-sm mb-1">{cert.name}</h4>
                      <div className="text-xs text-slate-400 mb-3">{cert.issuer}</div>

                      {/* Render CCNA Digital Badges if available */}
                      {cert.digitalBadges && cert.digitalBadges.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-700/30">
                          <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">
                            Verified Digital Badges:
                          </span>
                          {cert.digitalBadges.map((badge, bIdx) => (
                            <a
                              key={bIdx}
                              href={badge.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold border transition-all hover:scale-102 hover:border-indigo-400 group"
                              style={{
                                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(241, 245, 249, 0.9)',
                                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                              }}
                            >
                              <span className="text-[11px] text-slate-200 dark:text-slate-200 group-hover:text-indigo-400 truncate">
                                {badge.name}
                              </span>
                              <ExternalLink size={12} className="text-indigo-400 shrink-0 ml-1" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="text-xs font-mono text-emerald-400 font-semibold pt-2 border-t border-slate-700/20">
                      Issued {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
