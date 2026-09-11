# Drinkbaar Website

Public website for Drinkbaar

A compact Dutch landing page designed to fit one desktop viewport, with a stacked, naturally scrolling mobile layout. A responsive website for Drinkbaar's lightly smoked amber ale, lagered on oak chips. Styled after the Bruin Kroeg label, with warm paper colors, typewriter lettering, and a generated café product visual. Built with HTML, CSS, and local image assets; no build step required. Google Fonts supplies the typography, with system fallbacks when offline.

## Local preview

Visitors must confirm they are 18 or older before the page is shown. Under-18 answers remain blocked for the browser session. The age gate uses session storage when available and keeps content hidden when JavaScript is disabled. This is a self-declared age gate, not identity or date-of-birth verification. Logic lives in `public/assets/js/age-gate.js`.

```sh
python3 -m http.server 8000 --directory public
```

Visit http://localhost:8000. The existing GitHub Pages workflow deploys `public/` on pushes to `main`.

Edit `public/index.html` for copy and `public/assets/css/style.css` for styling. The generated product visualization is in `public/assets/img/bruin-kroeg-soft-reflections.png`. It is based on the actual product photograph and supplied label, with the barcode and administrative fine print omitted. The built-in image generation prompt is recorded in `docs/product-photo-refinement.md`.
