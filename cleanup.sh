#!/bin/bash

# This script removes node_modules and dist from git tracking
# These directories should be ignored per .gitignore

echo "Removing node_modules and dist from git tracking..."

# Remove from git tracking (doesn't delete local files)
git rm -r --cached node_modules 2>/dev/null || echo "node_modules not found in git"
git rm -r --cached dist 2>/dev/null || echo "dist not found in git"

# Commit the changes
git commit -m "Remove node_modules and dist from version control

- These directories should only be generated during build
- Removes permission issues during Vercel deployment
- Follows .gitignore rules"

echo "Done! Now run: git push"
