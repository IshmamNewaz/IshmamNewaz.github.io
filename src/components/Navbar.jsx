import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Sliders, 
  ChevronDown, 
  Send 
} from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export default function Navbar({ data, onOpenCustomizer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { themeId, setThemeId, currentTheme, soundEnabled, setSoundEnabled, playSound } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    playSound('click');
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 backdrop-blur-xl border-b shadow-lg' 
        : 'py-5 bg-transparent'
    }`}
    style={{
      backgroundColor: isScrolled ? (currentTheme.isDark ? 'rgba(10, 15, 30, 0.85)' : 'rgba(255, 255, 255, 0.88)') : 'transparent',
      borderColor: isScrolled ? (currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)') : 'transparent'
    }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
          className="group flex items-center gap-2.5 font-bold text-xl tracking-tight transition-transform hover:scale-105"
        >
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-white text-lg font-black shadow-md transition-transform group-hover:rotate-6"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
            }}
          >
            {data.personal.name ? data.personal.name.charAt(0) : 'A'}
          </div>
          <span className="font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(135deg, ${currentTheme.isDark ? '#f8fafc' : '#0f172a'}, ${currentTheme.primaryHex})`
            }}
          >
            {data.personal.name || 'Portfolio'}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xs"
          style={{
            backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.8)',
            borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive 
                    ? 'text-white shadow-sm' 
                    : (currentTheme.isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
                } : {}}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Tools: Theme Picker, Sound, Customizer, Hire CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          
          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                playSound('click');
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors hover:border-indigo-400"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }}
              title="Change Theme"
            >
              <span>{currentTheme.icon}</span>
              <span className="hidden xl:inline">{currentTheme.name}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${themeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {themeDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setThemeDropdownOpen(false)}
                />
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-xl p-1.5 border shadow-2xl z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                  style={{
                    backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.98)',
                    borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 text-slate-400">
                    Select Theme
                  </div>
                  {Object.values(THEMES).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        playSound('success');
                        setThemeId(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        themeId === t.id 
                          ? 'bg-indigo-500/20 text-indigo-400 font-semibold' 
                          : 'hover:bg-slate-500/10 text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{t.icon}</span>
                        <span>{t.name}</span>
                      </span>
                      <span 
                        className="w-3 h-3 rounded-full border border-white/20" 
                        style={{ backgroundColor: t.primaryHex }}
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playSound('click');
            }}
            className="p-2 rounded-lg border transition-colors"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
          >
            {soundEnabled ? <Volume2 size={16} className="text-indigo-400" /> : <VolumeX size={16} className="text-slate-400" />}
          </button>

          {/* Live Customizer Drawer Trigger */}
          <button
            onClick={() => {
              playSound('click');
              onOpenCustomizer();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all hover:scale-105"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              color: currentTheme.primaryHex
            }}
            title="Edit Portfolio Profile Data"
          >
            <Sliders size={14} />
            <span>Customize</span>
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-md transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
            }}
          >
            <Send size={13} />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              playSound('click');
              onOpenCustomizer();
            }}
            className="p-2 rounded-lg border text-indigo-400"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
            title="Customize"
          >
            <Sliders size={18} />
          </button>

          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg border text-slate-300 hover:text-white"
            style={{
              backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-b mt-2 px-4 py-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200"
          style={{
            backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-500/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">Theme:</span>
              <div className="flex gap-1">
                {Object.values(THEMES).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      playSound('success');
                      setThemeId(t.id);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                      themeId === t.id ? 'ring-2 ring-indigo-400 scale-110' : 'opacity-70'
                    }`}
                    style={{ backgroundColor: t.primaryHex }}
                    title={t.name}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs border"
            >
              {soundEnabled ? <Volume2 size={14} className="text-indigo-400" /> : <VolumeX size={14} className="text-slate-400" />}
              <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
