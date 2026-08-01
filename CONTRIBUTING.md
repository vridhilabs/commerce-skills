# Contributing to Commerce Skills

Thank you for your interest in contributing to **Commerce Skills**!

## How to Add a New Skill Module or Vertical

1. **Skill Folder Structure**:
   Create a new folder under `skills/<your-skill-name>/` with a `SKILL.md` file.
   Ensure frontmatter is defined:
   ```yaml
   ---
   name: your-skill-name
   description: Brief description of what this skill does.
   ---
   ```

2. **Update Dataset**:
   Add the skill metadata to `src/data/commerceSkillsData.js` so it automatically displays in the Web UI.

3. **Submit a Pull Request**:
   - Fork the repository.
   - Create a feature branch (`git checkout -b feature/new-commerce-skill`).
   - Commit your changes (`git commit -m "feat: add new commerce skill"`).
   - Push to your branch and submit a PR.
