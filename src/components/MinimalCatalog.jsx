import React, { useState } from 'react';
import { COMMERCE_SKILLS } from '../data/commerceSkillsData';
import { Copy, Check, ChevronDown, ChevronRight, Terminal, Sparkles, ExternalLink } from 'lucide-react';

export default function MinimalCatalog({ searchQuery, selectedCategory, onSelectSkill, onCopy }) {
  const [openPhases, setOpenPhases] = useState({ '01-core-commerce': true, '02-logistics-fms-tms': true });
  const [copiedId, setCopiedId] = useState(null);

  const togglePhase = (id) => {
    setOpenPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyPrompt = (e, skill) => {
    e.stopPropagation();
    onCopy(skill.promptTemplate);
    setCopiedId(skill.id);
    setTimeout(() => setCopiedId(null), 2000);
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
    <div className="max-w-5xl mx-auto text-slate-200">
      
      {/* Minimal Header Banner */}
      <div className="border-b border-slate-800 pb-8 mb-8">
        <div className="text-xs font-mono text-violet-400 mb-2 uppercase tracking-widest">
          // Reference Manual & Skill Specification
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-sans">
          Commerce OS — AI Engineering & Skill Curriculum
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          A structured 13-phase curriculum and open-source specification for building quick-commerce engines, WMS/IMS, fleet dispatch solvers, B2B credit systems, and autonomous AI role managers.
        </p>

        {/* Quick Index Metrics */}
        <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800/60 text-xs font-mono">
          <div>
            <span className="text-slate-500">Phases:</span> <span className="text-white font-bold">13</span>
          </div>
          <div>
            <span className="text-slate-500">Modules:</span> <span className="text-white font-bold">40+</span>
          </div>
          <div>
            <span className="text-slate-500">Verticals:</span> <span className="text-white font-bold">18</span>
          </div>
          <div>
            <span className="text-slate-500">License:</span> <span className="text-emerald-400 font-bold">MIT</span>
          </div>
          <div>
            <span className="text-slate-500">Package:</span> <span className="text-cyan-400 font-bold">@vridhilabs/commerce-skills</span>
          </div>
        </div>
      </div>

      {/* Curriculum Table View */}
      <div className="space-y-4">
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm font-mono">
            No matching curriculum modules found for "{searchQuery}".
          </div>
        ) : (
          filteredSkills.map((skill, index) => {
            const isOpen = openPhases[skill.id];
            return (
              <div 
                key={skill.id} 
                className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden transition-colors hover:border-slate-700"
              >
                {/* Accordion Row Header */}
                <div 
                  onClick={() => togglePhase(skill.id)}
                  className="px-4 py-3.5 flex items-center justify-between cursor-pointer select-none bg-slate-900/80 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button className="text-slate-500 hover:text-white transition-colors">
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-xs text-violet-400 font-semibold px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 shrink-0">
                      {skill.phase}
                    </span>
                    <span className="font-semibold text-sm text-white truncate">
                      {skill.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                      {skill.badge}
                    </span>
                    <button
                      onClick={(e) => handleCopyPrompt(e, skill)}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-violet-600 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
                      title="Copy AI Prompt"
                    >
                      {copiedId === skill.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Sparkles className="w-3 h-3" />}
                      <span className="hidden md:inline">{copiedId === skill.id ? 'Copied' : 'Prompt'}</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectSkill(skill); }}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1"
                    >
                      <span>Spec</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div className="p-4 border-t border-slate-800 bg-slate-950/60 space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Sub-module Table */}
                    <div className="border border-slate-800/80 rounded bg-slate-900/30 overflow-hidden">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 text-[11px] uppercase tracking-wider">
                          <tr>
                            <th className="py-2 px-3 font-semibold">Sub-System</th>
                            <th className="py-2 px-3 font-semibold">Key Capabilities & Engineering Specs</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          {Object.entries(skill.specDetails).map(([key, items], idx) => (
                            <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                              <td className="py-2 px-3 font-semibold text-violet-400 uppercase text-[11px] align-top w-36">
                                {key}
                              </td>
                              <td className="py-2 px-3">
                                <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                                  {items.map((item, i) => (
                                    <li key={i} className="font-sans text-xs">{item}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Code CLI Box */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Terminal className="w-4 h-4 text-slate-500 shrink-0" />
                        <span>{skill.cliCommand}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">{skill.skillFile}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
