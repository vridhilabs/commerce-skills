import React, { useState } from 'react';
import { Search, Copy, Check, Layers, Box, Compass, Sparkles, Github, ArrowUpRight } from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  activeTab, 
  setActiveTab 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx @vridhilabs/commerce-skills add all");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Vridhi Labs Logo */}
        <a 
          href="https://www.vridhilabs.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-base font-bold tracking-tighter text-white flex items-center gap-2 group"
        >
          <span className="text-white group-hover:text-orange-500 transition-colors">VRIDHI LABS</span>
          <span className="text-gray-600 font-normal text-xs font-mono hidden sm:inline">// AGENTIC PARTNER</span>
        </a>

        {/* Live Search */}
        <div className="relative flex-1 max-w-xs hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search 40+ skills, WMS, OMS, FMS... (⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-10 py-1.5 text-xs rounded-lg bg-gray-900/80 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-all font-mono"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[9px] text-gray-500 px-1 py-0.5 bg-gray-800 rounded border border-gray-700">
            ⌘K
          </kbd>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'skills' ? 'bg-orange-900/20 text-orange-400 border border-orange-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'architecture' ? 'bg-orange-900/20 text-orange-400 border border-orange-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('verticals')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'verticals' ? 'bg-orange-900/20 text-orange-400 border border-orange-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Verticals
          </button>
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'generator' ? 'bg-orange-900/20 text-orange-400 border border-orange-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Prompt Gen
          </button>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCli}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs text-orange-400 bg-orange-900/20 border border-orange-500/30 hover:bg-orange-900/40 transition-all"
            title="Click to copy install command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>npx @vridhilabs/commerce-skills</span>
          </button>

          <a
            href="https://www.vridhilabs.com/#book-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-1.5 rounded-md text-xs font-bold hover:bg-orange-500 hover:text-white transition flex items-center gap-1"
          >
            Book Audit <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
