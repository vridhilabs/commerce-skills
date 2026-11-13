#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0] || 'help';
const targetSkill = args[1];

console.log('\x1b[36m%s\x1b[0m', '🛒 Commerce Skills CLI — Agentic Skill Installer');
console.log('\x1b[90m%s\x1b[0m', '---------------------------------------------------');

const skillsList = [
  'core-commerce',
  'logistics-fms-tms',
  'ev-fleet-ops',
  'supplier-brand-portal',
  'customer-growth-crm',
  'commerce-intelligence',
  'financial-os',
  'local-brand-accelerator',
  'b2b-commerce',
  'creator-commerce',
  'hyperlocal-network',
  'api-integrations',
  'ai-commerce-os',
  'commerce-platform-sdk',
  'vertical-marketplaces',
  'end-vision-ecosystem'
];

if (command === 'list') {
  console.log('\x1b[33m%s\x1b[0m', 'Available Skill Modules (16):');
  skillsList.forEach((s, i) => {
    console.log(`  ${i + 1}. \x1b[32m${s}\x1b[0m`);
  });
  console.log('\nInstall using: \x1b[36mnpx commerce-skills add <skill-name>\x1b[0m');
} else if (command === 'add') {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, '.agents', 'skills');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  if (targetSkill && targetSkill !== 'all') {
    const srcFile = path.join(rootDir, 'skills', targetSkill, 'SKILL.md');
    if (!fs.existsSync(srcFile)) {
      console.log('\x1b[31m%s\x1b[0m', `Error: Skill "${targetSkill}" not found.`);
      console.log('Run \x1b[36mnpx commerce-skills list\x1b[0m to view valid skill names.');
      process.exit(1);
    }
    const destDir = path.join(targetDir, targetSkill);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(srcFile, path.join(destDir, 'SKILL.md'));
    console.log('\x1b[32m%s\x1b[0m', `✓ Successfully installed "${targetSkill}" into .agents/skills/${targetSkill}/SKILL.md`);
  } else {
    // Install all skills
    skillsList.forEach(s => {
      const srcFile = path.join(rootDir, 'skills', s, 'SKILL.md');
      if (fs.existsSync(srcFile)) {
        const destDir = path.join(targetDir, s);
        fs.mkdirSync(destDir, { recursive: true });
        fs.copyFileSync(srcFile, path.join(destDir, 'SKILL.md'));
      }
    });
    // Also copy master SKILL.md
    const masterSrc = path.join(rootDir, 'SKILL.md');
    if (fs.existsSync(masterSrc)) {
      const masterDest = path.join(targetDir, 'commerce-skills');
      fs.mkdirSync(masterDest, { recursive: true });
      fs.copyFileSync(masterSrc, path.join(masterDest, 'SKILL.md'));
    }
    console.log('\x1b[32m%s\x1b[0m', '✓ Successfully installed all 15 Commerce Skills into .agents/skills/');
  }
} else {
  console.log('Usage:');
  console.log('  \x1b[36mnpx commerce-skills add [skill-name]\x1b[0m   Install skill(s) into current workspace');
  console.log('  \x1b[36mnpx commerce-skills list\x1b[0m               List all 15 available skill modules');
  console.log('\nExamples:');
  console.log('  npx commerce-skills add core-commerce');
  console.log('  npx commerce-skills add logistics-fms-tms');
  console.log('  npx commerce-skills add all');
}
