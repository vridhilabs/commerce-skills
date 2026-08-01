import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import SkillCard from './SkillCard';
import SkillModal from './SkillModal';
import ArchitectureView from './ArchitectureView';
import VerticalExplorer from './VerticalExplorer';
import PromptGenerator from './PromptGenerator';
import { COMMERCE_SKILLS } from '../data/commerceSkillsData';
import { Sparkles, Layers, Box, Compass, Terminal, Shield, Zap } from 'lucide-react';

export default function MainApp() {
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [copiedCli, setCopiedCli] = useState('');

  const categories = ['All', 'Core Commerce', 'Logistics', 'Supplier', 'CRM & Growth', 'Intelligence', 'Finance', 'Brand Studio', 'B2B', 'Creator', 'Franchise', 'Integrations', 'AI Agents', 'Platform'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('input[type="text"]')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopyCli = (command) => {
    handleCopy(command);
    setCopiedCli(command);
    setTimeout(() => setCopiedCli(''), 2000);
  };

  const filteredSkills = COMMERCE_SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesQuery = 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      skill.modules.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Mainline Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      {activeTab === 'skills' && (
        <main className="flex-1 pb-24">
          {/* Mainline Hero Block */}
          <section className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Open-Source Commerce OS Agent Skills
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
              Production-Grade AI Skills for Hyperlocal & Multi-Tenant Commerce
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Turn complex e-commerce, warehouse, fleet logistics, B2B procurement, and AI automation requirements into executable agent workflows for Antigravity, Claude Code, and Cursor.
            </p>

            {/* Stats Overview Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-card/40 border border-border/60 backdrop-blur-md max-w-3xl mx-auto">
              <div className="p-3 text-center">
                <div className="text-2xl font-extrabold font-mono text-cyan-400">13</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Roadmap Phases</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-2xl font-extrabold font-mono text-violet-400">40+</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Domain Skills</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-2xl font-extrabold font-mono text-emerald-400">18</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Vertical Marketplaces</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-2xl font-extrabold font-mono text-amber-400">10</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Revenue Streams</div>
              </div>
            </div>
          </section>

          {/* Category Pills Bar */}
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-violet-600/30 to-cyan-600/30 border border-violet-500/50 text-white shadow-lg shadow-violet-500/20'
                      : 'bg-card/40 border border-border/40 text-muted-foreground hover:text-white hover:border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="max-w-7xl mx-auto px-4">
            {filteredSkills.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-base mb-2">No skills match "{searchQuery}"</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-4 py-2 text-xs rounded-lg bg-card border border-border text-white hover:bg-muted transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSkills.map(skill => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    onSelect={setSelectedSkill}
                    onCopyCli={handleCopyCli}
                    isCopied={copiedCli === skill.cliCommand}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      )}

      {activeTab === 'architecture' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
          <ArchitectureView />
        </main>
      )}

      {activeTab === 'verticals' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
          <VerticalExplorer onCopy={handleCopy} />
        </main>
      )}

      {activeTab === 'generator' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
          <PromptGenerator onCopy={handleCopy} />
        </main>
      )}

      {/* Inspector Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        onCopy={handleCopy}
      />
    </div>
  );
}
