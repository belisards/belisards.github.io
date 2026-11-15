import matter from 'gray-matter';
import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

export function loadProjects() {
  const codeDir = path.resolve('..', 'code');
  const dirs = fs.readdirSync(codeDir).filter(d =>
    fs.existsSync(path.join(codeDir, d, 'index.qmd'))
  );
  return dirs.map(d => {
    const { data } = matter(fs.readFileSync(path.join(codeDir, d, 'index.qmd'), 'utf-8'));
    return { ...data, slug: d } as Record<string, any>;
  }).filter(p => !p.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function loadYaml(file: string) {
  const filePath = path.resolve('src', 'data', file);
  return yaml.load(fs.readFileSync(filePath, 'utf-8')) as Record<string, any>;
}

export function loadHero() {
  return loadYaml('hero.yml') as {
    tagline: string;
    pairs: { from: string; to: string }[];
  };
}

export type Post = {
  slug: string;
  title: string;
  date: Date;
  kicker?: string;
  excerpt: string;
  lang?: string;
};

export function loadPosts(): Post[] {
  const { posts } = loadYaml('posts.yml') as { posts: Post[] };
  return posts
    .map(p => ({ ...p, date: new Date(p.date) }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatPostDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export type FeedItem = {
  kind: 'post' | 'publication';
  type: string;          // blog, academic, journalism, tutorial, essay, book
  title: string;
  url: string;
  year: number;
  date?: Date;           // posts only
  meta?: string;         // plain-text venue line (publications)
  excerpt?: string;      // posts only
  lang?: string;
  alt?: { label: string; url: string }; // other-language version
};

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const yearOf = (s: string) => {
  const m = s.match(/\b(19|20)\d{2}\b/);
  return m ? Number(m[0]) : undefined;
};

/** Newest blog posts and publications, merged and sorted by year (then file order). */
export function loadFeed(limit = 8): FeedItem[] {
  const pubs: (FeedItem & { order: number; rawMeta: string })[] = [];
  let order = 0;

  const walk = (node: any, lang: string) => {
    if (Array.isArray(node)) { node.forEach(n => walk(n, lang)); return; }
    if (!node || typeof node !== 'object') return;

    if (typeof node.title === 'string' && typeof node.url === 'string' && typeof node.meta === 'string') {
      const year = yearOf(stripHtml(node.meta));
      if (year) pubs.push({
        kind: 'publication', type: node.type ?? 'publication', title: node.title, url: node.url,
        year, meta: stripHtml(node.meta), rawMeta: node.meta, lang, order: order++,
      });
    } else if (typeof node.caption === 'string') {
      const href = node.caption.match(/href="([^"]+)"/)?.[1];
      const title = node.caption.match(/<strong>(.*?)<\/strong>/)?.[1] ?? node.title;
      const year = yearOf(stripHtml(node.caption));
      if (href && year) pubs.push({
        kind: 'publication', type: 'book', title: stripHtml(title), url: href,
        year, meta: stripHtml(node.caption).replace(stripHtml(title), '').replace(/^[,.\s]+/, '').replace(/^(19|20)\d{2}\.\s*/, ''),
        rawMeta: node.caption, lang, order: order++,
      });
    }
    for (const [k, v] of Object.entries(node)) {
      if (k === 'caption' || k === 'meta') continue;
      const childLang = k === 'sections' ? lang : (node.title === 'Works in English' ? 'en' : node.title?.startsWith?.('Portuguese') ? 'pt' : lang);
      walk(v, childLang);
    }
  };
  walk(loadYaml('publications.yml'), 'en');

  // Merge other-language versions: identical meta + year → one item with an alt link.
  const byMeta = new Map<string, FeedItem>();
  const merged: (FeedItem & { order: number })[] = [];
  for (const p of pubs) {
    const key = `${p.year}|${p.rawMeta}`;
    const first = byMeta.get(key);
    if (first && first.lang !== p.lang && !first.alt) {
      first.alt = { label: (p.lang ?? '').toUpperCase(), url: p.url };
      continue;
    }
    byMeta.set(key, p);
    merged.push(p);
  }

  const posts = loadPosts();
  const postUrls = new Set(posts.map(p => `/posts/${p.slug}/`));
  const postItems: (FeedItem & { order: number })[] = posts.map(p => ({
    kind: 'post', type: 'blog', title: p.title, url: `/posts/${p.slug}/`,
    year: p.date.getUTCFullYear(), date: p.date, excerpt: p.excerpt, lang: p.lang, order: -1,
  }));

  return [...postItems, ...merged.filter(p => !postUrls.has(p.url))]
    .sort((a, b) => b.year - a.year || a.order - b.order)
    .slice(0, limit)
    .map(({ order, ...rest }: any) => { delete rest.rawMeta; return rest as FeedItem; });
}
