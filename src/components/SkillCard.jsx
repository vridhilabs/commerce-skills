import React from 'react';
import { Copy, Check, ChevronRight, Terminal } from 'lucide-react';

export default function SkillCard({ skill, onSelect, onCopyCli, isCopied }) {
  return (
    <div className="skill-card" onClick={() => onSelect(skill)}>
      <div>
        <div className="card-header">
          <span className="card-phase">{skill.phase}</span>
          <span style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '2px 8px', borderRadius: '9999px', fontWeight: 600 }}>
            {skill.badge}
          </span>
        </div>

        <h3 className="card-title">{skill.title}</h3>
        <p className="card-desc">{skill.description}</p>

        <div className="card-modules">
          {skill.modules.map((m, i) => (
            <span key={i} className="module-chip">{m}</span>
          ))}
        </div>
      </div>

      <div className="card-footer" onClick={(e) => e.stopPropagation()}>
        <button 
          className="copy-cmd-btn"
          onClick={() => onCopyCli(skill.cliCommand)}
        >
          {isCopied ? (
            <>
              <Check size={13} style={{ color: '#10b981' }} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Terminal size={13} />
              <span>{skill.cliCommand}</span>
            </>
          )}
        </button>

        <div className="view-details-btn" onClick={() => onSelect(skill)}>
          Inspect <ChevronRight size={15} />
        </div>
      </div>
    </div>
  );
}
