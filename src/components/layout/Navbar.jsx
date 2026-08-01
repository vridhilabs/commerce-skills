import React, { useState } from 'react';
import { Search, Copy, Check, Layers, Box, Compass, Sparkles, Github } from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  activeTab, 
  setActiveTab 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx agy add commerce-skills");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" onClick={() => setActiveTab('skills')} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
            CS
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
              Commerce OS <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">Astro</span>
            </div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">Agentic Skills Library</div>
          </div>
        </a>

        {/* Live Search */}
        <div className="relative flex-1 max-w-sm hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search skills, WMS, OMS, FMS, AI... (⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-12 py-1.5 text-sm rounded-lg bg-card/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-muted-foreground px-1.5 py-0.5 bg-muted rounded border border-border">
            ⌘K
          </kbd>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'skills' ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30' : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Catalog
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'architecture' ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30' : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            <Box className="w-3.5 h-3.5" /> Architecture
          </button>
          <button
            onClick={() => setActiveTab('verticals')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'verticals' ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30' : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Verticals
          </button>
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'generator' ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30' : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Prompt Generator
          </button>
        </nav>

        {/* Copy CLI Badge */}
        <button
          onClick={handleCopyCli}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>npx agy add commerce-skills</span>
        </button>

        {/* Github Link */}
        <a
          href="https://github.com/vridhilabs/commerce-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
          title="GitHub Repository"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
