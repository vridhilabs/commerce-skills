import React, { useState } from 'react';
import { COMMERCE_SKILLS } from '../data/commerceSkillsData';
import { Copy, Check, ChevronDown, ChevronRight, Terminal, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export default function MinimalCatalog({ searchQuery, selectedCategory, onSelectSkill, onCopy }) {
  const [openPhases, setOpenPhases] = useState({ '01-core-commerce': true, '02-logistics-fms-tms': true });
  const [copiedId, setCopiedId] = useState(null);
  const [copiedCli, setCopiedCli] = useState(false);

  const togglePhase = (id) => {
    setOpenPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyPrompt = (e, skill) => {
    e.stopPropagation();
    onCopy(skill.promptTemplate);
    setCopiedId(skill.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyMainCli = () => {
    onCopy("npx @vridhilabs/commerce-skills add all");
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
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
    <div className="max-w-5xl mx-auto px-4 text-slate-200">
      
      {/* 1. Manual Masthead Header (aiengineeringfromscratch.com style) */}
      <section className="pt-12 pb-10 border-b border-gray-900">
        <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">
          <div>// VRIDHI LABS SPECIFICATION NO. 01</div>
          <div className="text-orange-500 font-semibold">ACCEPTING BATCH 01</div>
        </div>

        <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none mb-6">
          COMMERCE OS <span className="text-orange-500">FROM SCRATCH</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6 font-sans">
          A free, open-source reference curriculum & skill specification powering quick-commerce, dark store WMS, fleet dispatch, B2B credit, and autonomous AI role managers. Write the inventory hold, the FEFO pick algorithm, the VRPTW solver, and the agent loop by hand.
        </p>

        <div className="text-xs text-gray-500 italic mb-8">
          Architected by <a href="https://www.vridhilabs.com" target="_blank" className="text-orange-400 hover:underline">Vridhi Labs — Agentic Partner</a> for technical founders and GTM engineers.
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.vridhilabs.com/#book-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-white text-black font-mono font-bold text-xs hover:bg-orange-500 hover:text-white transition flex items-center gap-2"
          >
            Book Architecture Audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/vridhilabs/commerce-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-gray-900 border border-gray-800 text-white font-mono text-xs hover:border-orange-500 transition flex items-center gap-2"
          >
            GitHub Repository <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
          <button
            onClick={handleCopyMainCli}
            className="px-5 py-2.5 rounded bg-orange-900/20 border border-orange-500/30 text-orange-400 font-mono text-xs hover:bg-orange-900/40 transition flex items-center gap-2"
          >
            {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>npx @vridhilabs/commerce-skills add all</span>
          </button>
        </div>
      </section>

      {/* 2. Editorial Preface (aiengineeringfromscratch drop-cap style) */}
      <section className="py-10 border-b border-gray-900 grid md:grid-cols-3 gap-8">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold">
          // PREFACE & PRINCIPLES
        </div>
        <div className="md:col-span-2 text-sm text-gray-300 leading-relaxed font-sans space-y-4">
          <p className="drop-cap">
            Most quick-commerce and retail software fails because it is built as fragmented silos: a standalone POS, a separate WMS, a third-party rider app, and disconnected marketing tools. <strong className="text-white font-semibold">Commerce OS</strong> replaces ad-hoc improvisations with deterministic code, unified schemas, and autonomous AI role managers.
          </p>
          <p>
            Every phase in this curriculum provides strict database schemas, state machines, API contracts, and copyable prompts for AI agents. Whether building 10-minute delivery networks or HORECA B2B procurement, these skills ground your AI agents in real operational mechanics.
          </p>
        </div>
      </section>

      {/* 3. Stat Bar Section (aiengineeringfromscratch stat row style) */}
      <section className="py-10 border-b border-gray-900">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold mb-6">
          // DOMAIN COVERAGE BREAKDOWN
        </div>
        <div className="grid gap-3 max-w-2xl font-mono text-xs">
          {[
            { label: "CORE COMMERCE (WMS/IMS/OMS)", pct: "100%", bar: "w-full", color: "bg-orange-500" },
            { label: "FLEET & LOGISTICS (VRPTW)", pct: "92%", bar: "w-[92%]", color: "bg-cyan-500" },
            { label: "B2B & HORECA CREDIT", pct: "85%", bar: "w-[85%]", color: "bg-violet-500" },
            { label: "AUTONOMOUS AI ROLE MANAGERS", pct: "100%", bar: "w-full", color: "bg-emerald-500" },
            { label: "18 VERTICAL MARKETPLACES", pct: "100%", bar: "w-full", color: "bg-amber-500" }
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[180px_1fr_60px] items-center gap-4">
              <span className="text-gray-400 uppercase text-[11px]">{item.label}</span>
              <div className="h-3 bg-gray-900 rounded overflow-hidden relative">
                <div className={`h-full ${item.color} ${item.bar} transition-all duration-500`}></div>
              </div>
              <span className="text-right text-white font-bold">{item.pct}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Table of Contents & Phase Accordion List */}
      <section className="py-12 border-b border-gray-900">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold mb-2">
          // TABLE OF CONTENTS (13 PHASES)
        </div>
        <p className="text-xs text-gray-400 mb-8 font-sans">
          Click any phase row to inspect sub-systems, engineering specs, and copy AI agent prompt templates.
        </p>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-6 font-mono text-[11px] text-gray-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 border border-orange-400 inline-block"></span> Complete Spec
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-500 border border-cyan-400 inline-block"></span> Active Production
          </div>
        </div>

        <div className="space-y-3">
          {filteredSkills.map((skill, index) => {
            const isOpen = openPhases[skill.id];
            return (
              <div 
                key={skill.id}
                className="border border-gray-900 rounded-lg bg-[#0A0A0A] overflow-hidden transition-all hover:border-gray-800"
              >
                {/* TOC Row */}
                <div 
                  onClick={() => togglePhase(skill.id)}
                  className="p-4 flex flex-wrap items-center justify-between gap-3 cursor-pointer bg-[#0A0A0A] hover:bg-gray-900/60 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="w-3 h-3 bg-orange-500 border border-orange-400 shrink-0 inline-block"></span>
                    <span className="font-mono text-xs text-orange-500 font-bold w-16 shrink-0">
                      {skill.phase}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-tight truncate">
                      {skill.title}
                    </span>
                    <div className="toc-dots hidden md:block"></div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-gray-400 px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
                      {skill.badge}
                    </span>
                    <button
                      onClick={(e) => handleCopyPrompt(e, skill)}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-gray-900 hover:bg-orange-600 text-gray-300 hover:text-white border border-gray-800 transition-colors flex items-center gap-1.5"
                    >
                      {copiedId === skill.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Sparkles className="w-3 h-3 text-orange-400" />}
                      <span className="hidden sm:inline">{copiedId === skill.id ? 'Copied' : 'Prompt'}</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectSkill(skill); }}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 transition-colors"
                    >
                      Spec →
                    </button>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="p-4 border-t border-gray-900 bg-black/60 space-y-4">
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {skill.description}
                    </p>

                    {/* Sub-system Spec Table */}
                    <div className="border border-gray-900 rounded bg-[#0A0A0A] overflow-hidden">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-gray-900/80 text-gray-400 border-b border-gray-800 text-[11px] uppercase">
                          <tr>
                            <th className="py-2.5 px-3 font-semibold text-orange-400">Sub-System</th>
                            <th className="py-2.5 px-3 font-semibold">Capabilities & Technical Contracts</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-900 text-gray-300">
                          {Object.entries(skill.specDetails).map(([key, items], idx) => (
                            <tr key={idx} className="hover:bg-gray-900/30">
                              <td className="py-2.5 px-3 font-semibold text-cyan-400 uppercase text-[11px] align-top w-40">
                                {key}
                              </td>
                              <td className="py-2.5 px-3 font-sans text-xs">
                                <ul className="list-disc list-inside space-y-0.5 text-gray-300">
                                  {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* CLI File Spec Box */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2.5 rounded bg-[#0A0A0A] border border-gray-800 text-xs font-mono">
                      <div className="flex items-center gap-2 text-orange-400">
                        <Terminal className="w-4 h-4 text-gray-500 shrink-0" />
                        <span>{skill.cliCommand}</span>
                      </div>
                      <span className="text-[11px] text-gray-500">{skill.skillFile}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Colophon CLI Terminal Section */}
      <section className="py-12 border-b border-gray-900">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold mb-4">
          // COLOPHON & INSTALLATION COMMAND
        </div>
        <p className="text-xs text-gray-400 mb-4 font-sans max-w-xl">
          Execute this command in your terminal or inside Antigravity/Claude Code workspace to install all skills:
        </p>

        <div className="p-4 rounded-lg bg-[#0A0A0A] border border-gray-800 font-mono text-sm text-white flex flex-wrap items-center justify-between gap-3 shadow-inner">
          <code className="text-orange-400 font-bold">npx @vridhilabs/commerce-skills add all</code>
          <button 
            onClick={handleCopyMainCli}
            className="px-3 py-1.5 rounded bg-white text-black text-xs font-bold hover:bg-orange-500 hover:text-white transition"
          >
            {copiedCli ? "Copied!" : "Copy Command"}
          </button>
        </div>
      </section>

    </div>
  );
}
