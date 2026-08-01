import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillCard from './components/SkillCard';
import SkillModal from './components/SkillModal';
import ArchitectureView from './components/ArchitectureView';
import VerticalExplorer from './components/VerticalExplorer';
import PromptGenerator from './components/PromptGenerator';
import { COMMERCE_SKILLS } from './data/commerceSkillsData';

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [copiedCli, setCopiedCli] = useState('');

  const categories = ['All', 'Core Commerce', 'Logistics', 'Supplier', 'CRM & Growth', 'Intelligence', 'Finance', 'Brand Studio', 'B2B', 'Creator', 'Franchise', 'Integrations', 'AI Agents', 'Platform'];

  // Keyboard shortcut listener for ⌘K search focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-input')?.focus();
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

  // Filter skills based on category and search query
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
    <div className="app-layout">
      {/* Top Navigation Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        copiedCli={copiedCli}
        handleCopyCli={handleCopyCli}
      />

      {/* Main Page Render based on Active Tab */}
      {activeTab === 'skills' && (
        <main>
          <Hero onExploreClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })} />

          {/* Category Filter Pills */}
          <div className="category-bar">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid Section */}
          <div className="content-container" id="skills-section">
            {filteredSkills.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#9ca3af' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No skills match "{searchQuery}"</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="skills-grid">
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
        <main className="content-container" style={{ paddingTop: '2.5rem' }}>
          <ArchitectureView />
        </main>
      )}

      {activeTab === 'verticals' && (
        <main className="content-container" style={{ paddingTop: '2.5rem' }}>
          <VerticalExplorer onCopy={handleCopy} />
        </main>
      )}

      {activeTab === 'generator' && (
        <main className="content-container" style={{ paddingTop: '2.5rem' }}>
          <PromptGenerator onCopy={handleCopy} />
        </main>
      )}

      {/* Skill Inspector Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        onCopy={handleCopy}
      />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 1.5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.825rem' }}>
        <p>Commerce Skills OS • Open-Source AI Agent Skill Library for HYPR & Commerce Platforms</p>
      </footer>
    </div>
  );
}
