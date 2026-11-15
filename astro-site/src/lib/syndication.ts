import { loadYaml } from './data';
import { existsSync } from 'node:fs';

export const siteUrl = 'https://belisario.website';
export function publishedPosts() {
  const { posts } = loadYaml('posts.yml');
  const seen = new Set<string>();
  return posts.filter((p: any) => !p.draft).map((p: any) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug) || seen.has(p.slug)) {
      throw new Error(`Invalid or duplicate post slug: ${p.slug}`);
    }
    seen.add(p.slug);
    const date = new Date(p.date);
    if (!Number.isFinite(date.getTime()) || !p.title || !p.excerpt) {
      throw new Error(`Missing title, excerpt, or valid date: ${p.slug}`);
    }
    if (!existsSync(`src/pages/posts/${p.slug}.astro`)) {
      throw new Error(`Missing article page: ${p.slug}`);
    }
    return { id: `${siteUrl}/posts/${p.slug}/`, title: p.title, description: p.excerpt,
      date: date.toISOString(), lang: p.lang ?? 'en', announce: p.social !== false };
  }).filter((p: any) => new Date(p.date).getTime() <= Date.now())
    .sort((a: any, b: any) => b.date.localeCompare(a.date));
}
