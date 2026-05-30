# Deploying to GitHub Pages

Two simple options to host this site on GitHub Pages:

- Serve from the repository root (recommended for this scaffold):
  1. Commit and push the files to the `main` branch.
  2. In your repository on GitHub go to Settings → Pages.
  3. Select `main` branch and the `/ (root)` folder, then Save.

- Use the `gh-pages` branch (automated):
  - Install `gh-pages` or use GitHub Actions to publish `index.html` to `gh-pages`.

Quick local preview:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

Next steps:
- Replace placeholder content in `index.html` and `assets/css/style.css`.
- Add product images under `assets/img/` and update markup.
- Add a `CNAME` if you have a custom domain.
