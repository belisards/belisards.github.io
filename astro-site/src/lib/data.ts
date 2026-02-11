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
