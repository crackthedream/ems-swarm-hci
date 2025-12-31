#!/bin/bash
# 手动部署脚本 - 将 out/ 目录部署到 gh-pages 分支

echo "Building static site..."
npm run export

echo "Creating gh-pages branch..."
git checkout --orphan gh-pages
git rm -rf .

echo "Copying out/ directory..."
cp -r out/* .
cp out/.nojekyll . 2>/dev/null || echo "" > .nojekyll

echo "Committing to gh-pages..."
git add .
git commit -m "Deploy to GitHub Pages"

echo "Pushing to GitHub..."
git push origin gh-pages --force

echo "Switching back to main branch..."
git checkout main

echo "Deployment complete! Your site should be available at:"
echo "https://crackthedream.github.io/ems-swarm-hci/"

