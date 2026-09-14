# Drinkbaar Website

Public website for Drinkbaar

A Dutch landing page with a contact section and a stacked mobile layout. A responsive website for Drinkbaar's lightly smoked amber ale, lagered on oak chips. Styled after the Bruin Kroeg label, with warm paper colors, typewriter lettering, and a generated café product visual. Built with HTML, CSS, and local image assets; no build step required. Courier Prime is served locally from `public/assets/font/`, with system fallbacks while loading.

## Local preview

Visitors must confirm they are 18 or older before the page is shown. Under-18 answers remain blocked for the browser session. The age gate uses session storage when available and keeps content hidden when JavaScript is disabled. This is a self-declared age gate, not identity or date-of-birth verification. Logic lives in `public/assets/js/age-gate.js`.

```sh
python3 -m http.server 8000 --directory public
```

Visit http://localhost:8000. The existing GitHub Pages workflow deploys `public/` on pushes to `main`.

Edit `public/index.html` for copy and `public/assets/css/style.css` for styling. The generated product visualization is in `public/assets/img/bruin-kroeg-soft-reflections.png`. It is based on the actual product photograph and supplied label, with the barcode and administrative fine print omitted. The built-in image generation prompt is recorded in `docs/product-photo-refinement.md`.

The contact section displays Amelu BV's postal address, VAT number, and a `mailto:info@amelu.be` link. Visitors send messages through their own email application; the website has no contact form or submission service.

The Dutch privacy statement lives in `public/privacy.html` and is accessible without the age gate or JavaScript. Links are provided on the age gate, in the contact section, and in the footer. Privacy requests go to `info@amelu.be`. The statement describes email and postal correspondence, GitHub Pages, and session storage; keep it in sync with changes to those services.

Before relying on the statement as a complete compliance measure, Amelu BV should validate the stated legal bases, the retention criteria against actual correspondence deletion practices, the email provider, and the applicable processor agreements and international transfer safeguards. Publishing the statement does not configure retention or establish those contracts. No fixed retention period or signed agreement has been assumed.
