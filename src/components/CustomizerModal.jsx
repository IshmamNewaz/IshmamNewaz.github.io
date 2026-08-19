import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Upload, 
  RotateCcw, 
  Sparkles, 
  Sliders, 
  Check, 
  Plus, 
  Trash2 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { initialPortfolioData } from '../data/portfolioData';

export default function CustomizerModal({ data, onUpdateData, onClose }) {
  const { currentTheme, playSound } = useTheme();
  const [formData, setFormData] = useState({ ...data });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handlePersonalChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    playSound('success');
    onUpdateData(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleExportJSON = () => {
    playSound('click');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolioData.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          setFormData(parsed);
          onUpdateData(parsed);
          playSound('success');
          setSaveSuccess(true);
          setTimeout(() => setSaveSuccess(false), 2000);
        } catch (err) {
          alert('Invalid JSON file.');
        }
      };
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all portfolio details back to default template?')) {
      playSound('click');
      setFormData(initialPortfolioData);
      onUpdateData(initialPortfolioData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/75 animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
          borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md"
          style={{
            backgroundColor: currentTheme.isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Sliders size={16} />
            </div>
            <div>
              <h3 className="font-bold text-base">Live Profile Customizer</h3>
              <p className="text-xs text-slate-400">Edit info live or export configuration</p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-2 rounded-xl border transition-colors hover:bg-slate-500/20"
            style={{
              borderColor: currentTheme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl border bg-slate-900/40 border-slate-700/40">
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 hover:border-indigo-400 transition-colors"
                title="Export config to JSON file"
              >
                <Download size={13} />
                <span>Export JSON</span>
              </button>

              <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 hover:border-indigo-400 transition-colors cursor-pointer">
                <Upload size={13} />
                <span>Import JSON</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>

              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 border border-rose-500/30 hover:bg-rose-500/10 transition-colors"
                title="Reset to Template Defaults"
              >
                <RotateCcw size={13} />
                <span>Reset</span>
              </button>
            </div>

            {saveSuccess && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 animate-in fade-in">
                <Check size={14} />
                <span>Changes Applied Live!</span>
              </span>
            )}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Information</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.name}
                  onChange={(e) => handlePersonalChange('name', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Location</label>
                <input
                  type="text"
                  value={formData.personal.location}
                  onChange={(e) => handlePersonalChange('location', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Availability Status</label>
                <input
                  type="text"
                  value={formData.personal.availability}
                  onChange={(e) => handlePersonalChange('availability', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Hero Bio Tagline</label>
              <textarea
                rows={2}
                value={formData.personal.tagline}
                onChange={(e) => handlePersonalChange('tagline', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Avatar Image URL</label>
              <input
                type="text"
                value={formData.personal.avatar}
                onChange={(e) => handlePersonalChange('avatar', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 font-mono text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  value={formData.personal.phone || ''}
                  onChange={(e) => handlePersonalChange('phone', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Google Scholar URL</label>
                <input
                  type="text"
                  value={formData.personal.googleScholar || ''}
                  onChange={(e) => handlePersonalChange('googleScholar', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 font-mono text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">GitHub URL</label>
                <input
                  type="text"
                  value={formData.personal.github}
                  onChange={(e) => handlePersonalChange('github', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.personal.linkedin}
                  onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Twitter / X URL</label>
                <input
                  type="text"
                  value={formData.personal.twitter || ''}
                  onChange={(e) => handlePersonalChange('twitter', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900/60 border-slate-700 text-white outline-hidden focus:border-indigo-400 font-mono"
                />
              </div>
            </div>

          </div>

          {/* Save Action */}
          <div className="pt-4 border-t border-slate-700/40 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primaryHex}, ${currentTheme.accentHex})`
              }}
            >
              Apply Changes Live
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
