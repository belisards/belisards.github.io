import { publishedPosts, siteUrl } from '../lib/syndication';
const escape = (value: string) => value.replace(/[<>&"']/g, c =>
  ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]!));
export function GET() {
  const items = publishedPosts().map((p: any) => `<item>
<title>${escape(p.title)}</title><link>${escape(p.id)}</link>
<guid isPermaLink="true">${escape(p.id)}</guid>
<description>${escape(p.description)}</description>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Adriano Belisario</title><link>${siteUrl}</link>
<description>Essays and articles by Adriano Belisario.</description>
<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
