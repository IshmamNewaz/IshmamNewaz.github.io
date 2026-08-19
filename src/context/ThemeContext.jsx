import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  indigo: {
    id: 'indigo',
    name: 'Deep Indigo',
    icon: '🌌',
    isDark: true,
    bgClass: 'bg-slate-950 text-slate-100',
    primary: 'indigo',
    primaryHex: '#6366f1',
    accentHex: '#a855f7',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    cardBg: 'rgba(30, 41, 59, 0.7)',
    cardBorder: 'rgba(99, 102, 241, 0.15)',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500'
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    icon: '⚡',
    isDark: true,
    bgClass: 'bg-zinc-950 text-zinc-100',
    primary: 'cyan',
    primaryHex: '#06b6d4',
    accentHex: '#ec4899',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    cardBg: 'rgba(24, 24, 27, 0.75)',
    cardBorder: 'rgba(6, 182, 212, 0.2)',
    gradient: 'from-cyan-400 via-fuchsia-500 to-yellow-400'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Matrix',
    icon: '🌿',
    isDark: true,
    bgClass: 'bg-neutral-950 text-neutral-100',
    primary: 'emerald',
    primaryHex: '#10b981',
    accentHex: '#14b8a6',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    cardBg: 'rgba(23, 23, 23, 0.75)',
    cardBorder: 'rgba(16, 185, 129, 0.2)',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-500'
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Amber',
    icon: '🌅',
    isDark: true,
    bgClass: 'bg-stone-950 text-stone-100',
    primary: 'amber',
    primaryHex: '#f59e0b',
    accentHex: '#f43f5e',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    cardBg: 'rgba(28, 25, 23, 0.75)',
    cardBorder: 'rgba(245, 158, 11, 0.2)',
    gradient: 'from-amber-400 via-rose-500 to-purple-600'
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight OLED',
    icon: '🖤',
    isDark: true,
    bgClass: 'bg-black text-white',
    primary: 'blue',
    primaryHex: '#3b82f6',
    accentHex: '#60a5fa',
    glowColor: 'rgba(59, 130, 246, 0.2)',
    cardBg: 'rgba(15, 15, 15, 0.85)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    gradient: 'from-blue-500 via-indigo-500 to-sky-400'
  },
  light: {
    id: 'light',
    name: 'Clean Slate',
    icon: '☀️',
    isDark: false,
    bgClass: 'bg-slate-50 text-slate-900',
    primary: 'indigo',
    primaryHex: '#4f46e5',
    accentHex: '#7c3aed',
    glowColor: 'rgba(79, 70, 229, 0.15)',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    cardBorder: 'rgba(203, 213, 225, 0.8)',
    gradient: 'from-indigo-600 via-purple-600 to-blue-600'
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved && THEMES[saved] ? saved : 'indigo';
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('portfolio_sound');
    return saved ? JSON.parse(saved) : true;
  });

  const currentTheme = THEMES[themeId] || THEMES.indigo;

  useEffect(() => {
    localStorage.setItem('portfolio_theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    if (currentTheme.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty('--glow-color', currentTheme.glowColor);
    root.style.setProperty('--card-bg', currentTheme.cardBg);
    root.style.setProperty('--card-border', currentTheme.cardBorder);
    root.style.setProperty('--primary-color', currentTheme.primaryHex);
    root.style.setProperty('--accent-color', currentTheme.accentHex);
  }, [themeId, currentTheme]);

  useEffect(() => {
    localStorage.setItem('portfolio_sound', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  // Web Audio API subtle click sounds
  const playSound = (type = 'click') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    } catch (e) {
      // Audio context may require initial user interaction
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      themeId, 
      setThemeId, 
      currentTheme, 
      soundEnabled, 
      setSoundEnabled,
      playSound 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
