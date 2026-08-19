import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  PhoneCall
} from 'lucide-react';
import { Github, Linkedin, Twitter, GoogleScholar } from './Icons';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export default function Contact({ data }) {
  const { currentTheme, playSound } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research / Engineering Inquiry',
    message: '',
    serviceType: 'AI & Deep Learning'
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'AI & Deep Learning Systems',
    'Robotics & Embedded Systems',
    'Full-Stack Web Application (Laravel/React)',
    'Enterprise Networking (Cisco/Linux)',
    'Academic & Research Collaboration'
  ];

  const handleCopyEmail = () => {
    playSound('success');
    navigator.clipboard.writeText(data.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    playSound('success');
    if (data.personal.phone) {
      navigator.clipboard.writeText(data.personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);
    playSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound('success');
      
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: [currentTheme.primaryHex, currentTheme.accentHex, '#10b981', '#3b82f6']
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Send size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Let's Collaborate on High-Impact Systems
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Interested in AI research, robotics platforms, enterprise full-stack development, or network architecture? Reach out directly.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email & Phone Copy Card */}
            <div 
              className="p-8 rounded-3xl border relative overflow-hidden"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Direct Contact</h3>
                  <p className="text-xs text-slate-400">Fast response via email & phone</p>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between p-3 rounded-xl border bg-slate-900/60 border-slate-700/50 mb-3">
                <div className="flex items-center gap-2 truncate pr-2">
                  <Mail size={14} className="text-indigo-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-indigo-300 truncate">
                    {data.personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:scale-105 shrink-0"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Row */}
              {data.personal.phone && (
                <div className="flex items-center justify-between p-3 rounded-xl border bg-slate-900/60 border-slate-700/50 mb-4">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <PhoneCall size={14} className="text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono font-bold text-emerald-300 truncate">
                      {data.personal.phone}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all hover:scale-105 shrink-0"
                  >
                    {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              )}

              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to get in touch regarding research opportunities, AI systems engineering, robotics development, or enterprise software.
              </p>
            </div>

            {/* Quick Details Card */}
            <div 
              className="p-6 rounded-3xl border space-y-4"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Base & Address</div>
                  <div className="text-sm font-bold">{data.personal.address || data.personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Timezone & Readiness</div>
                  <div className="text-sm font-bold">BST (UTC+6) • Open to Onsite & Remote</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Position</div>
                  <div className="text-sm font-bold text-indigo-400">Research Assistant @ D2A2I, AIUB</div>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div 
              className="p-6 rounded-3xl border"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Research & Professional Links
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {data.personal.github && (
                  <a
                    href={data.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border text-center transition-all hover:scale-105 hover:bg-slate-500/10"
                    style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
                  >
                    <Github size={20} className="mx-auto mb-1 text-slate-300" />
                    <span className="text-[11px] font-bold">GitHub</span>
                  </a>
                )}
                {data.personal.linkedin && (
                  <a
                    href={data.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border text-center transition-all hover:scale-105 hover:bg-slate-500/10"
                    style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
                  >
                    <Linkedin size={20} className="mx-auto mb-1 text-blue-400" />
                    <span className="text-[11px] font-bold">LinkedIn</span>
                  </a>
                )}
                {data.personal.googleScholar && (
                  <a
                    href={data.personal.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border text-center transition-all hover:scale-105 hover:bg-slate-500/10"
                    style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
                  >
                    <GoogleScholar size={20} className="mx-auto mb-1 text-blue-300" />
                    <span className="text-[11px] font-bold">Scholar</span>
                  </a>
                )}
                {data.personal.email && (
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="p-3 rounded-2xl border text-center transition-all hover:scale-105 hover:bg-slate-500/10"
                    style={{ borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
                  >
                    <Mail size={20} className="mx-auto mb-1 text-emerald-400" />
                    <span className="text-[11px] font-bold">Email</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div 
              className="p-8 sm:p-10 rounded-3xl border relative"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-black">Message Dispatched!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. I have received your note and will reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'New Project Inquiry',
                        message: '',
                        serviceType: 'Full-Stack Web App'
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold border transition-all hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Lin"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all focus:ring-2"
                        style={{
                          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)',
                          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                          color: currentTheme.isDark ? '#f8fafc' : '#0f172a'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="maya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all focus:ring-2"
                        style={{
                          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)',
                          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                          color: currentTheme.isDark ? '#f8fafc' : '#0f172a'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Topic / Service Area
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all focus:ring-2"
                      style={{
                        backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)',
                        borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                        color: currentTheme.isDark ? '#f8fafc' : '#0f172a'
                      }}
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s} className="bg-slate-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, team, timeline, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all focus:ring-2 resize-none"
                      style={{
                        backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)',
                        borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                        color: currentTheme.isDark ? '#f8fafc' : '#0f172a'
                      }}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-98 disabled:opacity-50"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`,
                      boxShadow: `0 10px 25px -5px ${currentTheme.glowColor}`
                    }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
