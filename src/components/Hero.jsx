import React from 'react';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-section">
      <div className="hero-pill">
        <Sparkles size={14} /> Open-Source Commerce OS Agent Skills
      </div>
      
      <h1 className="hero-title">
        Production-Grade AI Skills for Hyperlocal & Multi-Tenant Commerce
      </h1>
      
      <p className="hero-subtitle">
        Turn complex e-commerce, warehouse, fleet logistics, B2B procurement, and AI automation requirements into executable agent workflows for Antigravity, Claude Code, and Cursor.
      </p>

      {/* Stats Counter Grid */}
      <div className="stats-banner">
        <div className="stat-item">
          <div className="stat-val">13</div>
          <div className="stat-lbl">Roadmap Phases</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">40+</div>
          <div className="stat-lbl">Domain Skills</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">18</div>
          <div className="stat-lbl">Vertical Marketplaces</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">10</div>
          <div className="stat-lbl">Revenue Streams</div>
        </div>
      </div>
    </section>
  );
}
