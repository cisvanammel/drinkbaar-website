# Deploying to GitHub Pages

Two simple options to host this site on GitHub Pages:

- Serve from the repository root (manual):
  1. Commit and push the files to the `main` branch.
  2. In your repository on GitHub go to Settings → Pages.
  3. Select `main` branch and the `/ (root)` folder, then Save.

- Automatic deploy to `gh-pages` using GitHub Actions (recommended):
  - This repository includes a workflow that builds a `public/` directory containing only the site files (`index.html`, `assets/`, optional `CNAME`/`404.html`) and publishes that directory to the `gh-pages` branch.
  - The workflow runs on pushes to `main` and can be triggered manually from the Actions tab.

CI workflow details

- Workflow file: `.github/workflows/gh-pages.yml`
- What it does:
  - Deploys `public/` to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Quick local preview:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

Triggering and verification

- Commit the workflow and push to `main` to trigger a deploy:
```bash
git add .github/workflows/gh-pages.yml
git commit -m "Add GH Pages deploy workflow"
git push origin main
```
- Or run the workflow manually: GitHub → Actions → "Deploy to GitHub Pages" → Run workflow.
- After a successful run, ensure your repository's Pages settings point to the `gh-pages` branch (or configure a custom domain via `CNAME`).

Notes and next steps

- Because the workflow copies only `index.html` and `assets/` into `public/`, other repo files (README, docs, etc.) are excluded from the published site.
- If you add a build step later (Sass, bundler, static site generator), update the workflow to output into `public/` accordingly.
- Replace placeholder content in `index.html` and `assets/css/style.css` and add product images under `assets/img/`.

