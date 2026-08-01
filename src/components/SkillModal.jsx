import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Sparkles, FileText, Code2, Layers } from 'lucide-react';

export default function SkillModal({ skill, onClose, onCopy }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  if (!skill) return null;

  const handlePromptCopy = () => {
    onCopy(skill.promptTemplate);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCliCopy = () => {
    onCopy(skill.cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="card-phase">{skill.phase}</span>
              <span style={{ fontSize: '0.75rem', color: '#8b5cf6', background: 'rgba(139,92,246,0.15)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                {skill.category}
              </span>
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>{skill.title}</h2>
          </div>

          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Modal Inner Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem 1.5rem', background: '#090d16', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <button 
            className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Layers size={15} /> Overview & Specs
          </button>
          <button 
            className={`nav-btn ${activeTab === 'prompt' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompt')}
          >
            <Sparkles size={15} /> AI Agent Prompt
          </button>
          <button 
            className={`nav-btn ${activeTab === 'cli' ? 'active' : ''}`}
            onClick={() => setActiveTab('cli')}
          >
            <Terminal size={15} /> CLI & File Spec
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <div>
              <p style={{ color: '#9ca3af', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {skill.description}
              </p>

              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Core System Components
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {Object.entries(skill.specDetails).map(([key, items], idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                      {key}
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', color: '#d1d5db', fontSize: '0.825rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Domain Tags & Capabilities
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skill.tags.map((t, i) => (
                  <span key={i} style={{ background: 'rgba(6,182,212,0.1)', color: '#38bdf8', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.775rem', border: '1px solid rgba(6,182,212,0.2)' }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Ready-to-use prompt for Antigravity, Claude or Cursor:</span>
                <button className="copy-cmd-btn" onClick={handlePromptCopy}>
                  {copiedPrompt ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedPrompt ? "Copied Prompt!" : "Copy Prompt"}</span>
                </button>
              </div>
              <div className="code-block">
                {skill.promptTemplate}
              </div>
            </div>
          )}

          {activeTab === 'cli' && (
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Install Skill into Agent Workspace
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <input 
                  type="text" 
                  readOnly 
                  value={skill.cliCommand} 
                  style={{ flex: 1, background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8', fontFamily: 'var(--font-mono)', padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }} 
                />
                <button className="copy-cmd-btn" onClick={handleCliCopy}>
                  {copiedCli ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedCli ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Skill Spec File Path
              </h4>
              <div style={{ background: '#090d16', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: '#a78bfa' }}>
                {skill.skillFile}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
