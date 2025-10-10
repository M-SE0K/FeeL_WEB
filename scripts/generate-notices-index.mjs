#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const noticesDir = path.join(projectRoot, 'public', 'notices');
const outputPath = path.join(projectRoot, 'src', 'component', 'notice', 'announcement', 'notices.index.json');

function extractTitle(md) {
  const lines = md.split(/\r?\n/);
  for (const l of lines) {
    const m = l.match(/^\s*#\s+(.+)/);
    if (m) return m[1].trim();
  }
  const first = lines.find((l) => l.trim().length > 0);
  return (first || '제목 없음').replace(/^[-#*>\s]+/, '').trim();
}

function extractDateFromFilename(name) {
  const m = name.match(/(20\d{2}-\d{2}-\d{2})/);
  if (m) {
    const d = new Date(m[1]);
    if (!isNaN(d)) return d.toISOString();
  }
  return null;
}

function main() {
  if (!fs.existsSync(noticesDir)) {
    console.error(`[gen:notices] Directory not found: ${noticesDir}`);
    process.exit(0);
  }
  const files = fs.readdirSync(noticesDir).filter((f) => f.toLowerCase().endsWith('.md'));
  const items = [];
  for (const file of files) {
    const abs = path.join(noticesDir, file);
    const slug = file.replace(/\.md$/i, '');
    const md = fs.readFileSync(abs, 'utf8');
    const title = extractTitle(md) || slug;
    const stat = fs.statSync(abs);
    const detected = extractDateFromFilename(file);
    const date = detected || stat.mtime.toISOString();
    items.push({ slug, title, date, file: `/notices/${file}` });
  }
  items.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(items, null, 2) + '\n', 'utf8');
  console.log(`[gen:notices] Wrote ${items.length} entries -> ${path.relative(projectRoot, outputPath)}`);
}

main();
