# PortfolioScienceArchival
**Science & Technology · Archival & Scholarly**
*Brutalist-archival web presence. Current: Sprint 4.*

---

## Stack
- Pure HTML / CSS / Vanilla JS (zero dependencies, zero build step)
- Fonts via Google Fonts (Homemade Apple · Libre Baskerville · Courier Prime · Source Code Pro)
- Deploy target: **Vercel** (static)

---

## File Structure

```
PortfolioScienceArchival/
├── index.html              ← Single-page app entry (live version)
├── vercel.json             ← Vercel deploy config
├── README.md
├── archive/                ← Sprint snapshots (do not deploy)
│   ├── portfolio-science-archival.html
│   ├── portfolio-sprint1.html
│   ├── portfolio-sprint2.html
│   └── portfolio-sprint3.html
└── src/
    ├── styles/
    │   └── main.css        ← All styles + design tokens
    └── components/
        └── main.js         ← Navigation, filters, reveal animations
```

---

## Versioning Strategy

Sprint milestones are tracked using **git tags**, not file copies.

```bash
# Tag the current state as a sprint milestone
git tag sprint-4 -m "Sprint 4: top nav, full English, sprint-2 numbering"
git push origin --tags

# View all sprint tags
git tag -l "sprint-*"

# Check out a previous sprint for reference
git checkout sprint-3
```

The `archive/` directory contains static HTML snapshots for quick visual reference without switching branches.
These files are not linked or deployed — they are reference artifacts only.

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
git add .
git commit -m "feat: sprint 4 — top nav, translations, sprint-2 numbering"
git push origin main
```

### Step 2 — Connect to Vercel

1. Go to **vercel.com** → Log in with GitHub
2. Click **"Add New Project"**
3. Import your `PortfolioScienceArchival` repository
4. Framework preset: **Other**
5. Root directory: `./` (leave as default)
6. Click **Deploy**

Vercel auto-detects `vercel.json` and deploys as static.

---

## Sprint History

| Tag       | Description                                                        |
|-----------|--------------------------------------------------------------------|
| sprint-1  | Initial static prototype — sidebar nav, OULIPO constraint design   |
| sprint-2  | Full-width layout, project numbering 001–006, full content         |
| sprint-3  | Revised project numbering (P.01 format), design refinements        |
| sprint-4  | Top nav (sidebar removed), full English, reverted to 001 numbering |

---

## Customisation

### Design tokens
All visual variables are in `src/styles/main.css` under `:root {}`.
Change `--cobalt` to shift the entire accent colour system.

### Add a publication
Copy a `<article class="pub-item" data-type="journal">` block in `index.html`
and update the content. The filter system works automatically.

---

*Designed in the OULIPO tradition — constraint-first, archival clarity over decorative noise.*
*Homemade Apple · Libre Baskerville · Courier Prime · Source Code Pro*
