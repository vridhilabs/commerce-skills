import React from 'react';
import { Search, Copy, Check, Sparkles, Layers, Box, Cpu, Compass, DollarSign } from 'lucide-react';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  activeTab, 
  setActiveTab, 
  copiedCli, 
  handleCopyCli 
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        <a href="#" className="logo-area" onClick={() => setActiveTab('skills')}>
          <div className="logo-icon">CS</div>
          <div>
            <div>Commerce OS</div>
            <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontWeight: 400, marginTop: '-2px' }}>
              Agentic Skills Library
            </div>
          </div>
        </a>

        {/* Search Bar */}
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search skills, WMS, OMS, FMS, AI, Verticals... (Press ⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="keyboard-shortcut">⌘K</span>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Layers size={16} /> Skills Catalog
          </button>
          <button 
            className={`nav-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <Box size={16} /> Ecosystem Architecture
          </button>
          <button 
            className={`nav-btn ${activeTab === 'verticals' ? 'active' : ''}`}
            onClick={() => setActiveTab('verticals')}
          >
            <Compass size={16} /> 18 Verticals
          </button>
          <button 
            className={`nav-btn ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            <Sparkles size={16} /> Prompt Generator
          </button>
        </div>

        {/* Copy All Skills CLI Button */}
        <button 
          className="cli-badge-btn"
          onClick={() => handleCopyCli("npx agy add commerce-skills")}
          title="Click to copy CLI command"
        >
          {copiedCli === "npx agy add commerce-skills" ? (
            <>
              <Check size={14} style={{ color: '#10b981' }} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>npx agy add commerce-skills</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
