# PortfolioScienceArchival
**Science & Technology · Archival & Scholarly**
*Brutalist-archival web presence. Sprint 1 — static prototype.*

---

## Stack
- Pure HTML / CSS / Vanilla JS (zero dependencies, zero build step)
- Fonts via Google Fonts (Homemade Apple · Libre Baskerville · Courier Prime · Source Code Pro)
- Deploy target: **Vercel** (static)

---

## File Structure

```
PortfolioScienceArchival/
├── index.html              ← Single-page app entry
├── vercel.json             ← Vercel deploy config
├── README.md
└── src/
    ├── styles/
    │   └── main.css        ← All styles + design tokens
    └── components/
        └── main.js         ← Navigation, filters, reveal animations
```

---

## Local Development

No build step needed. Just open in a browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — local server (recommended, avoids CORS on fonts)
npx serve .
# or
python3 -m http.server 3000
```

---

## Deploy to GitHub + Vercel

### Step 1 — Push to GitHub

```bash
# In your terminal, from this folder:
git init
git add .
git commit -m "feat: initial portfolio — oulipo method sprint 1"

# Create a new repo on github.com/carzaga1/PortfolioScienceArchival, then:
git remote add origin https://github.com/carzaga1/PortfolioScienceArchival.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to **vercel.com** → Log in with GitHub
2. Click **"Add New Project"**
3. Import your `PortfolioScienceArchival` repository
4. Framework preset: **Other**
5. Root directory: `./` (leave as default)
6. Click **Deploy**

Vercel auto-detects `vercel.json` and deploys as static. Your site is live at:
`https://PortfolioScienceArchival.vercel.app` (or your custom domain)

### Step 3 — Custom Domain (optional)

In Vercel dashboard → Project → Settings → Domains → Add your domain.

---

## Customisation

### Replace placeholder content
All content lives in `index.html`. Search for:
- `Your Name` → your full name
- `your@email.ch` → your email
- `[Your Discipline]` → your field
- `[Your Institution]` → your affiliation
- `10.xxxx/` → real DOIs
- `arXiv:2026.xxxxx` → real arXiv IDs

### Design tokens
All visual variables are in `src/styles/main.css` under `:root {}`.
Change `--cobalt` to shift the entire accent colour system.

### Add a publication
Copy a `<article class="pub-item" data-type="journal">` block in `index.html`
and update the content. The filter system works automatically.

---

## Sprint 2 (Next Phase)
- [ ] Migrate to Next.js 14 + MDX (content editable without touching HTML)
- [ ] Add dark mode toggle
- [ ] Add search across publications
- [ ] RSS feed for new publications
- [ ] PDF export polish via CSS @print

---

*Designed in the OULIPO tradition — constraint-first, archival clarity over decorative noise.*
*Homemade Apple · Libre Baskerville · Courier Prime · Source Code Pro*
