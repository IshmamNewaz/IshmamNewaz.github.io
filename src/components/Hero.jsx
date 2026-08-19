import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Layers,
  CheckCircle2,
  FileText,
  Boxes,
  Bot,
  GraduationCap
} from 'lucide-react';
import { Github, Linkedin, Twitter, GoogleScholar } from './Icons';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export default function Hero({ data, onOpenResumeModal }) {
  const { currentTheme, playSound } = useTheme();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic shuffling commands for the floating research badge
  const [commandIndex, setCommandIndex] = useState(0);
  const commands = [
    'ros2 run edge_ai perception',
    'llm.compress(quantization="int8")',
    'vlm.generate(vision_embeds)',
    'yolo.detect(stream=depth_cam)',
    'kd.distill(teacher, student)',
    'voice.synthesize(tts_model="edge")'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCommandIndex((prev) => (prev + 1) % commands.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [commands.length]);

  const titles = data.personal.titles && data.personal.titles.length > 0 
    ? data.personal.titles 
    : ['AI & Deep Learning Researcher', 'Edge AI & Robotics Specialist'];

  // Typewriter effect
  useEffect(() => {
    const currentFullTitle = titles[titleIndex % titles.length];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentFullTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting 
          ? currentFullTitle.substring(0, displayText.length - 1)
          : currentFullTitle.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const handleConfetti = () => {
    playSound('success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: [currentTheme.primaryHex, currentTheme.accentHex, '#10b981', '#f59e0b']
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background glow effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${currentTheme.primaryHex} 0%, ${currentTheme.accentHex} 70%, transparent 100%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Intro & Call to Action */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Availability Status Badge */}
          <div 
            onClick={handleConfetti}
            className="cursor-pointer inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-md mb-6 transition-all hover:scale-105"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.85)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className={currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}>
              {data.personal.availability || 'Research Assistant at D2A2I, AIUB'}
            </span>
            <Sparkles size={14} className="text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Headline Name */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-4">
            <span>Hi, I'm </span>
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              }}
            >
              {data.personal.name}
            </span>
          </h1>

          {/* Typewriter Dynamic Title */}
          <div className="h-12 sm:h-14 flex items-center mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold flex items-center gap-2">
              <span className="text-slate-400">&gt;</span>
              <span className={currentTheme.isDark ? 'text-slate-200' : 'text-slate-800'}>
                {displayText}
              </span>
              <span className="inline-block w-2.5 h-6 sm:h-7 bg-indigo-500 animate-pulse ml-0.5" 
                style={{ backgroundColor: currentTheme.primaryHex }}
              />
            </h2>
          </div>

          {/* Bio Tagline */}
          <p className={`text-base sm:text-lg max-w-2xl mb-8 leading-relaxed ${
            currentTheme.isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {data.personal.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={() => playSound('click')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`,
                boxShadow: `0 10px 25px -5px ${currentTheme.glowColor}`
              }}
            >
              <span>Explore Research & Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold border backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
              }}
            >
              <span>Contact Me</span>
            </a>

            <button
              onClick={() => {
                playSound('click');
                onOpenResumeModal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider border transition-all hover:border-indigo-400"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
              title="View Academic CV & Publications"
            >
              <FileText size={16} className="text-indigo-400" />
              <span>Academic CV</span>
            </button>
          </div>

          {/* Social Links & Location */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 border-t border-slate-700/30 w-full">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={14} className="text-rose-400" />
              <span>{data.personal.location}</span>
            </div>

            <div className="h-4 w-px bg-slate-700/50 hidden sm:block" />

            <div className="flex items-center gap-3">
              {data.personal.github && (
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('hover')}
                  className="p-2.5 rounded-lg border transition-all hover:scale-110 hover:text-white"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              )}
              {data.personal.linkedin && (
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('hover')}
                  className="p-2.5 rounded-lg border transition-all hover:scale-110 hover:text-blue-400"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {data.personal.googleScholar && (
                <a
                  href={data.personal.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('hover')}
                  className="p-2.5 rounded-lg border transition-all hover:scale-110 hover:text-blue-300"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  title="Google Scholar Profile"
                >
                  <GoogleScholar size={18} />
                </a>
              )}
              {data.personal.email && (
                <a
                  href={`mailto:${data.personal.email}`}
                  onClick={() => playSound('hover')}
                  className="p-2.5 rounded-lg border transition-all hover:scale-110 hover:text-emerald-400"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  title="Email Direct"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual, Avatar & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          <div className="relative w-72 sm:w-88 aspect-square">
            
            {/* Outer rotating glowing ring */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-75 blur-xl animate-pulse-glow"
              style={{
                background: `linear-gradient(45deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              }}
            />

            {/* Avatar Frame Container */}
            <div 
              className="relative w-full h-full rounded-3xl overflow-hidden p-1.5 border backdrop-blur-md shadow-2xl transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={data.personal.avatar}
                alt={data.personal.name}
                className="w-full h-full object-cover rounded-2xl filter contrast-105"
              />
              
              {/* Subtle gradient vignette overlay */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: currentTheme.isDark 
                    ? 'linear-gradient(to top, rgba(15, 23, 42, 0.65) 0%, transparent 45%)'
                    : 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 35%)'
                }}
              />
            </div>

            {/* Floating Badge 1: Research Assistant (Top-Left, ample width) */}
            <div 
              className="absolute -top-4 -left-4 sm:-left-10 px-4 py-2.5 rounded-2xl border backdrop-blur-xl shadow-xl flex items-center gap-3 animate-bounce min-w-[210px]"
              style={{
                animationDuration: '4s',
                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.94)' : 'rgba(255, 255, 255, 0.96)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
              >
                <Cpu size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100 dark:text-white">Research Assistant</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">D2A2I, AIUB</div>
              </div>
            </div>

            {/* Floating Badge 2: Research Systems (Bottom-Right, ample width) */}
            <div 
              className="absolute -bottom-6 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl border backdrop-blur-xl shadow-xl flex items-center gap-3 animate-bounce min-w-[220px]"
              style={{
                animationDuration: '5s',
                animationDelay: '1s',
                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.94)' : 'rgba(255, 255, 255, 0.96)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0">
                <Boxes size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100 dark:text-white">Edge AI & Vision</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">4+ Funded Initiatives</div>
              </div>
            </div>

            {/* Dynamic Shuffling Command Chip (Positioned safely below/side, off the face) */}
            <div 
              className="absolute -bottom-14 left-2 sm:-left-4 px-4 py-2 rounded-xl border backdrop-blur-xl shadow-xl flex items-center gap-2.5 text-xs font-mono transition-all duration-300 z-20"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.96)',
                borderColor: currentTheme.isDark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(99, 102, 241, 0.3)',
                color: currentTheme.primaryHex
              }}
            >
              <Terminal size={14} className="text-indigo-400 shrink-0" />
              <span className="font-semibold tracking-tight text-[11px] sm:text-xs">
                {commands[commandIndex]}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* KPI Stats Bar underneath Hero spanning full width in row */}
      <div className="max-w-7xl mx-auto w-full mt-24 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'CCNA Certification', value: 'CCNA Certified', desc: '3 Cisco Digital Badges' },
            { label: 'National Project', value: '1 National', desc: 'Bangladesh TRP System (BSCL)' },
            { label: 'International', value: '2 International', desc: 'Canada & USA Funded Research' },
            { label: 'Honors & Awards', value: '4x Dean\'s Award', desc: 'AIUB Honorable Mentions' }
          ].map((stat, i) => (
            <div 
              key={i}
              className="p-6 rounded-3xl border text-center transition-all hover:scale-105 shadow-md flex flex-col justify-between"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div 
                className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text mb-1"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
                }}
              >
                {stat.value}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
