import React, { useState } from 'react';
import { Box, Layers, Cpu, ArrowDown, DollarSign, ShieldCheck, Zap } from 'lucide-react';
import { REVENUE_STREAMS } from '../data/commerceSkillsData';

export default function ArchitectureView() {
  const [selectedNode, setSelectedNode] = useState('commerce-os');

  const nodes = {
    suppliers: { title: "Suppliers & Manufacturers", desc: "Raw component suppliers, agricultural farms, OEM manufacturers, and D2C brands feeding inventory into the platform." },
    'commerce-os': { title: "Commerce OS Infrastructure", desc: "Centralized operating system managing WMS, IMS, OMS, FMS, TMS, Financial OS, AI Agents, APIs, and Analytics." },
    fulfillment: { title: "Warehouse & Dark Store Network", desc: "Decentralized high-density micro-warehouses and franchise dark stores carrying FEFO-rotated stock." },
    logistics: { title: "Fleet & Transport Network", desc: "EV delivery fleet, autonomous dispatch, route optimization solver, and driver app network." },
    end: { title: "Consumers, Businesses & Creators", desc: "End users across quick-commerce apps, B2B procurement buyers (HORECA), creators, and franchise partners." }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
          Commerce OS End Vision & Ecosystem Architecture
        </h2>
        <p style={{ color: '#9ca3af', maxWidth: '700px', margin: '0 auto' }}>
          Rather than just another quick-commerce app, Commerce OS builds a defensible software and network platform moat across the entire supply chain.
        </p>
      </div>

      {/* Interactive Flow Diagram */}
      <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          
          {/* Node 1 */}
          <div 
            onClick={() => setSelectedNode('suppliers')}
            style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              background: selectedNode === 'suppliers' ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.04)',
              border: selectedNode === 'suppliers' ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.1)',
              color: '#fff', 
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              maxWidth: '450px',
              textAlign: 'center',
              boxShadow: selectedNode === 'suppliers' ? '0 0 20px rgba(6,182,212,0.3)' : 'none'
            }}
          >
            🏭 Suppliers & Manufacturers
          </div>

          <ArrowDown size={20} style={{ color: '#6b7280' }} />

          {/* Node 2 - Core OS */}
          <div 
            onClick={() => setSelectedNode('commerce-os')}
            style={{ 
              padding: '1.5rem 2.5rem', 
              borderRadius: '16px', 
              background: selectedNode === 'commerce-os' ? 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))' : 'rgba(139,92,246,0.1)',
              border: '2px solid #8b5cf6',
              color: '#fff', 
              fontWeight: 800,
              fontSize: '1.2rem',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '650px',
              textAlign: 'center',
              boxShadow: '0 0 30px rgba(139,92,246,0.35)'
            }}
          >
            <div style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>⚡ Commerce OS Platform</div>
            <div style={{ fontSize: '0.8rem', color: '#d8b4fe', fontWeight: 500, display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span>WMS</span> • <span>IMS</span> • <span>OMS</span> • <span>CRM</span> • <span>FMS</span> • <span>TMS</span> • <span>Finance</span> • <span>AI</span> • <span>APIs</span>
            </div>
          </div>

          <ArrowDown size={20} style={{ color: '#6b7280' }} />

          {/* Node 3 & 4 Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', maxWidth: '650px' }}>
            <div 
              onClick={() => setSelectedNode('fulfillment')}
              style={{ 
                padding: '1rem', 
                borderRadius: '12px', 
                background: selectedNode === 'fulfillment' ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.04)',
                border: selectedNode === 'fulfillment' ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                color: '#fff', 
                fontWeight: 600,
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              🏬 Micro-Warehouses & Dark Stores
            </div>
            <div 
              onClick={() => setSelectedNode('logistics')}
              style={{ 
                padding: '1rem', 
                borderRadius: '12px', 
                background: selectedNode === 'logistics' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.04)',
                border: selectedNode === 'logistics' ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.1)',
                color: '#fff', 
                fontWeight: 600,
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              🛵 Fleet & Autonomous Logistics
            </div>
          </div>

          <ArrowDown size={20} style={{ color: '#6b7280' }} />

          {/* Node 5 */}
          <div 
            onClick={() => setSelectedNode('end')}
            style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              background: selectedNode === 'end' ? 'rgba(236,72,153,0.2)' : 'rgba(255,255,255,0.04)',
              border: selectedNode === 'end' ? '1px solid #ec4899' : '1px solid rgba(255,255,255,0.1)',
              color: '#fff', 
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              maxWidth: '450px',
              textAlign: 'center'
            }}
          >
            👥 Consumers • Businesses • Creators • Franchisees
          </div>

        </div>

        {/* Selected Node Details Box */}
        {selectedNode && (
          <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#090d16', borderRadius: '12px', border: '1px solid rgba(139,92,246,0.3)' }}>
            <h4 style={{ color: '#a78bfa', fontSize: '1rem', marginBottom: '0.31rem' }}>
              {nodes[selectedNode].title}
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
              {nodes[selectedNode].desc}
            </p>
          </div>
        )}
      </div>

      {/* Revenue Streams Grid */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <DollarSign size={20} style={{ color: '#10b981' }} /> 10 Platform Revenue Streams
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
        {REVENUE_STREAMS.map((rev, idx) => (
          <div key={idx} style={{ background: 'rgba(17,24,39,0.7)', padding: '1.15rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{rev.title}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                {rev.pct}
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: '1.4' }}>{rev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
