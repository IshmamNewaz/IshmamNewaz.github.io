import React from 'react';
import { 
  Quote, 
  Star, 
  MessageSquareQuote, 
  Building 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials({ data }) {
  const { currentTheme, playSound } = useTheme();

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <MessageSquareQuote size={13} />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Recommendations & Client Praise
          </h2>
          <p className={`text-base ${currentTheme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Direct feedback from engineering leaders, product managers, and research collaborators.
          </p>
          <div className="h-1 w-20 mx-auto rounded-full mt-4" 
            style={{ background: `linear-gradient(90deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})` }}
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonials.map((test, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playSound('hover')}
              className="p-8 rounded-3xl border flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: currentTheme.isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.85)',
                borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Top Quote Icon & Stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
                    }}
                  >
                    <Quote size={18} />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(test.rating || 5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed italic mb-8 ${
                  currentTheme.isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  "{test.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-700/30">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: currentTheme.primaryHex }}
                />
                <div>
                  <h4 className="font-bold text-sm">{test.name}</h4>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <span>{test.role}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-300">{test.company}</span>
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
