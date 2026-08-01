import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, Sliders } from 'lucide-react';
import { COMMERCE_SKILLS, VERTICAL_MARKETPLACES } from '../data/commerceSkillsData';

export default function PromptGenerator({ onCopy }) {
  const [selectedPhase, setSelectedPhase] = useState(COMMERCE_SKILLS[0].id);
  const [selectedVertical, setSelectedVertical] = useState(VERTICAL_MARKETPLACES[0].name);
  const [selectedTarget, setSelectedTarget] = useState('antigravity');
  const [copied, setCopied] = useState(false);

  const activeSkill = COMMERCE_SKILLS.find(s => s.id === selectedPhase) || COMMERCE_SKILLS[0];

  const generatedPrompt = `// AI Agent Task Blueprint for ${selectedTarget.toUpperCase()}
// Target Phase: ${activeSkill.phase} — ${activeSkill.title}
// Target Vertical: ${selectedVertical}

System Persona: Senior Commerce OS Architect & Principal Full-Stack Engineer

Context & Goal:
You are building the ${activeSkill.title} subsystem customized for ${selectedVertical}.

Required System Specifications:
1. Core Modules to Implement: ${activeSkill.modules.join(', ')}.
2. Key Capabilities & Domain Rules:
${Object.entries(activeSkill.specDetails).map(([k, v]) => `   - [${k}]: ${v.join('; ')}`).join('\n')}
3. Execution Playbook:
   - Setup PostgreSQL database models with strict foreign keys & indexed query patterns.
   - Implement real-time Redis state management for flash reservations & lock management.
   - Generate REST/GraphQL APIs and unit tests covering edge-case business logic.

Deliverables:
- Clean modular TypeScript/Node.js code inside modern app directory.
- Complete API route documentation & database migration file.`;

  const handleCopy = () => {
    onCopy(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
          Interactive AI Prompt Generator
        </h2>
        <p style={{ color: '#9ca3af' }}>
          Generate custom, high-precision prompts for Antigravity, Claude Code, or Cursor agents.
        </p>
      </div>

      <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          
          {/* Phase Selector */}
          <div>
            <label style={{ display: 'block', color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Select Roadmap Phase:
            </label>
            <select 
              value={selectedPhase} 
              onChange={(e) => setSelectedPhase(e.target.value)}
              style={{ width: '100%', background: '#090d16', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.6rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
            >
              {COMMERCE_SKILLS.map(s => (
                <option key={s.id} value={s.id}>{s.phase}: {s.title}</option>
              ))}
            </select>
          </div>

          {/* Vertical Selector */}
          <div>
            <label style={{ display: 'block', color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Select Vertical Marketplace:
            </label>
            <select 
              value={selectedVertical} 
              onChange={(e) => setSelectedVertical(e.target.value)}
              style={{ width: '100%', background: '#090d16', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.6rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
            >
              {VERTICAL_MARKETPLACES.map((v, i) => (
                <option key={i} value={v.name}>{v.icon} {v.name}</option>
              ))}
            </select>
          </div>

          {/* Target Agent Selector */}
          <div>
            <label style={{ display: 'block', color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Target AI Tool:
            </label>
            <select 
              value={selectedTarget} 
              onChange={(e) => setSelectedTarget(e.target.value)}
              style={{ width: '100%', background: '#090d16', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.6rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
            >
              <option value="antigravity">Google Antigravity (AGY)</option>
              <option value="claude">Claude Code</option>
              <option value="cursor">Cursor AI</option>
              <option value="windsurf">Windsurf</option>
            </select>
          </div>

        </div>

        {/* Output Prompt Box */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600 }}>Generated Agent Prompt:</span>
            <button className="copy-cmd-btn" onClick={handleCopy}>
              {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
              <span>{copied ? "Copied Prompt!" : "Copy Generated Prompt"}</span>
            </button>
          </div>

          <div className="code-block" style={{ maxHeight: '350px', overflowY: 'auto' }}>
            {generatedPrompt}
          </div>
        </div>
      </div>
    </div>
  );
}
