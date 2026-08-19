import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ResumeModal({ data, onClose }) {
  const { currentTheme, playSound } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/80 animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: currentTheme.isDark ? '#0f172a' : '#ffffff',
          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md bg-slate-900/90 border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white">Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white min-h-[800px] font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">{data.personal.name}</h1>
              <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{data.personal.titles[0]}</p>
            </div>

            <div className="text-xs text-slate-600 text-right space-y-1">
              <div className="font-semibold text-slate-900">{data.personal.phone}</div>
              <div>{data.personal.email}</div>
              <div>{data.personal.address || data.personal.location}</div>
              <div className="text-[11px] font-mono text-indigo-600">{data.personal.linkedin}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {data.about.story}
            </p>
          </div>

          {/* Core Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Core Competencies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.slice(0, 16).map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-[11px] font-mono text-slate-800">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((job, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xs font-bold text-slate-900">{job.role} — <span className="text-indigo-700">{job.company}</span></h3>
                    <span className="text-[11px] font-mono text-slate-500">{job.period} | {job.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="text-xs text-slate-800">
                  <div className="font-bold">{edu.degree}</div>
                  <div className="text-slate-600">{edu.institution} ({edu.period})</div>
                  <div className="text-emerald-700 font-semibold text-[11px]">{edu.honors}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Certifications & Badges
              </h2>
              {data.certifications.map((c, idx) => (
                <div key={idx} className="text-xs text-slate-800 mb-2">
                  <div className="font-bold">{c.name}</div>
                  <div className="text-[11px] text-slate-600 mb-0.5">{c.issuer} • {c.year}</div>
                  {c.digitalBadges && c.digitalBadges.length > 0 && (
                    <div className="pl-2 space-y-0.5 mt-0.5 border-l border-slate-300">
                      {c.digitalBadges.map((b, bIdx) => (
                        <a key={bIdx} href={b.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-indigo-600 block hover:underline">
                          • {b.name} (Digital Badge ↗)
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
