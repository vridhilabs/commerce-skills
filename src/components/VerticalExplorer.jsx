import React, { useState } from 'react';
import { VERTICAL_MARKETPLACES } from '../data/commerceSkillsData';
import { Sparkles, Copy, Check, Terminal } from 'lucide-react';

export default function VerticalExplorer({ onCopy }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyPrompt = (vert, idx) => {
    const prompt = `Role: Vertical E-Commerce Specialist
Task: Launch ${vert.name} on Commerce OS platform.
Specs:
- Category & Feature Spec: ${vert.desc}
- Configure custom tax rules, delivery SLA targets, cold-chain storage parameters, and product variant matrix.
- Generate specialized AI prompt for catalog creation and inventory replenishment.`;
    onCopy(prompt);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
          18 Turnkey Vertical Marketplaces
        </h2>
        <p style={{ color: '#9ca3af', maxWidth: '700px', margin: '0 auto' }}>
          Launch specialized niche marketplaces on top of the same underlying Commerce OS platform infrastructure with zero custom code rebuilds.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {VERTICAL_MARKETPLACES.map((vert, idx) => (
          <div 
            key={idx} 
            style={{ 
              background: 'rgba(17,24,39,0.7)', 
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '14px', 
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease'
            }}
          >
            <div>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{vert.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                {vert.name}
              </h3>
              <p style={{ fontSize: '0.825rem', color: '#9ca3af', lineHeight: '1.45', marginBottom: '1.25rem' }}>
                {vert.desc}
              </p>
            </div>

            <button 
              className="copy-cmd-btn"
              onClick={() => handleCopyPrompt(vert, idx)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {copiedIndex === idx ? (
                <>
                  <Check size={14} style={{ color: '#10b981' }} />
                  <span>Copied Launcher Prompt!</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  <span>Copy Vertical AI Prompt</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
