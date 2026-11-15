import { publishedPosts } from '../lib/syndication';
export function GET() {
  return Response.json({ version: 1, posts: publishedPosts() });
}
