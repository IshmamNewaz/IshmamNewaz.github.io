import React from 'react';
import { 
  Zap, 
  Shield, 
  Sparkles, 
  Palette, 
  Code, 
  Server, 
  Database, 
  Cpu,
  Bot,
  Layout,
  CheckCircle2,
  Coffee,
  Globe,
  Award,
  GraduationCap,
  Microscope,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About({ data }) {
  const { currentTheme, playSound } = useTheme();

  const iconMap = {
    Bot: <Bot size={24} className="text-indigo-400" />,
    Layout: <Layout size={24} className="text-cyan-400" />,
    Cpu: <Cpu size={24} className="text-emerald-400" />,
    Server: <Server size={24} className="text-amber-400" />,
    Code: <Code size={24} className="text-blue-400" />,
    Database: <Database size={24} className="text-rose-400" />,
    Sparkles: <Sparkles size={24} className="text-purple-400" />
  };

  const researchInterests = data.about.researchInterests || [
    "Computer Vision & Pattern Recognition",
    "Large Language Models (LLMs) & LoRA",
    "Edge AI & Model Compression (Quantization, KD)",
    "Vision-Language Models (VLM) & Multimodal AI",
    "Autonomous Robotics & Assistive Technology (ROS/ROS2)",
    "IoT Systems & High-Frequency Sensor Telemetry"
  ];

  const highlights = [
    "Applied AI & Deep Learning research across BSCL (Govt-funded), Canada-funded, and USA-funded initiatives",
    "Model compression pipelines: INT8/INT4 Quantization, Knowledge Distillation & LoRA edge fine-tuning",
    "Multi-sensor robotic perception: RGB-D depth cameras, RPLIDAR, ultrasonic arrays & ROS/ROS2 nodes",
    "Aspiring University Lecturer dedicated to undergraduate teaching, mentoring & AI research innovation"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${currentTheme.primaryHex}15`,
              color: currentTheme.primaryHex
            }}
          >
            <Microscope size={14} />
            <span>Academic & Research Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            AI & Robotics Systems Researcher
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging cutting-edge Deep Learning theory with real-world Edge AI, assistive robotics, and scalable software architectures.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Two Column Layout: Story & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Research Interests */}
          <div className="lg:col-span-6 space-y-6">
            <div 
              className="p-8 sm:p-9 rounded-3xl border relative overflow-hidden backdrop-blur-md"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span>Biography & Academic Vision</span>
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono font-semibold">
                  researcher.bio
                </span>
              </div>

              <p className={`text-base leading-relaxed mb-4 ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {data.about.story}
              </p>

              <p className={`text-base leading-relaxed ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {data.about.subStory}
              </p>

              {/* Research Interests Tags */}
              <div className="mt-8 pt-6 border-t border-slate-700/30">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-indigo-400" />
                  <span>Primary Research Interests</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium border"
                      style={{
                        backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.75)' : 'rgba(241, 245, 249, 0.9)',
                        borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                        color: currentTheme.isDark ? '#cbd5e1' : '#334155'
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights & Principles */}
              <div className="mt-8 pt-6 border-t border-slate-700/30">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Key Research Strengths & Focus
                </h4>
                <div className="space-y-3">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className={`text-sm leading-relaxed ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Badge Banner */}
            <div className="grid grid-cols-3 gap-4">
              <div 
                className="p-4 rounded-2xl border text-center"
                style={{
                  backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <GraduationCap size={20} className="mx-auto mb-1.5 text-indigo-400" />
                <div className="text-xs font-bold">Future Lecturer</div>
                <div className="text-[10px] text-slate-400">Teaching & Research</div>
              </div>

              <div 
                className="p-4 rounded-2xl border text-center"
                style={{
                  backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <Cpu size={20} className="mx-auto mb-1.5 text-emerald-400" />
                <div className="text-xs font-bold">Edge AI Focus</div>
                <div className="text-[10px] text-slate-400">Constrained Hardware</div>
              </div>

              <div 
                className="p-4 rounded-2xl border text-center"
                style={{
                  backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <Award size={20} className="mx-auto mb-1.5 text-amber-400" />
                <div className="text-xs font-bold">Funded Grants</div>
                <div className="text-[10px] text-slate-400">BSCL, Canada & USA</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Engineering Pillars with Ample Width and No Text Shadowing */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                onMouseEnter={() => playSound('hover')}
                className="p-7 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative group flex flex-col justify-between"
                style={{
                  backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.92)',
                  borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div>
                  <div 
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110 shadow-xs"
                    style={{
                      backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(241, 245, 249, 0.95)',
                      borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {iconMap[pillar.icon] || <Bot size={24} className="text-indigo-400" />}
                  </div>

                  <h4 className="text-lg font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed ${currentTheme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
