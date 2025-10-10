#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { NotionAPI } from 'notion-client';

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'public', 'notion');
const indexPath = path.join(projectRoot, 'src', 'component', 'notice', 'announcement', 'notices.index.json');

// 환경변수
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || '';
const NOTION_PAGE_IDS = (process.env.NOTION_PAGE_IDS || '').split(',').map(s => s.trim()).filter(Boolean);

async function fetchSingle(pageId) {
  const api = new NotionAPI({ authToken: process.env.NOTION_TOKEN });
  return api.getPage(pageId);
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\-\s_]+/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80) || 'untitled';
}

function pickTitleFromRecordMap(recordMap) {
  const block = recordMap.block && Object.values(recordMap.block)[0];
  const v = block?.value?.properties?.title?.[0]?.[0];
  return v || '제목 없음';
}

async function main() {
  ensureDir(outputDir);
  const entries = [];

  // 1) 개별 페이지 ID 목록이 제공된 경우 우선 사용
  for (const pid of NOTION_PAGE_IDS) {
    try {
      const recordMap = await fetchSingle(pid);
      const title = pickTitleFromRecordMap(recordMap);
      const slug = toSlug(title) + '-' + pid.slice(0, 8);
      const file = `/notion/${pid}.json`;
      fs.writeFileSync(path.join(outputDir, `${pid}.json`), JSON.stringify(recordMap));
      entries.push({ slug, title, date: new Date().toISOString(), file, notionPageId: pid });
      console.log(`[fetch:notion] saved ${pid}.json (${title})`);
    } catch (e) {
      console.error('[fetch:notion] page fetch error:', pid, e.message);
    }
  }

  // 2) Database 연동은 추후 확장: 지금은 페이지 목록만 지원
  //    필요 시 공식 @notionhq/client로 DB query → pageId 배열 생성 후 위 로직 재사용

  if (entries.length > 0) {
    // 기존 파일이 있다면 병합 대신 덮어쓰기(단순화)
    const sorted = entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    ensureDir(path.dirname(indexPath));
    fs.writeFileSync(indexPath, JSON.stringify(sorted, null, 2));
    console.log(`[fetch:notion] wrote index -> ${path.relative(projectRoot, indexPath)}`);
  }
}

main().catch((e) => {
  console.error('[fetch:notion] failed:', e);
  process.exit(1);
});
