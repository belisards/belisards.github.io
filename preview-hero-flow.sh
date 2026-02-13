#!/bin/bash
# Preview hero-flow-field branch on port 4322 (default Astro dev is 4321)
WORKTREE="/tmp/hero-flow-field-preview"

if [ ! -d "$WORKTREE" ]; then
  git worktree add "$WORKTREE" hero-flow-field
fi

cd "$WORKTREE/astro-site" && npm install --silent && npx astro dev --port 4322
