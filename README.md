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

Sprint milestones are tracked as **annotated git tags** using semantic pre-release versioning:
`v0.{sprint}.0-pre`

| Sprint | Tag              | GitHub Release |
|--------|------------------|----------------|
| 1      | `v0.1.0-pre`     | Pre-release    |
| 2      | `v0.2.0-pre`     | Pre-release    |
| 3      | `v0.3.0-pre`     | Pre-release    |
| 4      | `v0.4.0-pre`     | Pre-release    |

The `1.0.0` stable release is reserved for the first fully production-ready version.

### Tagging commands

```bash
# ── Backfill Sprint 3 (point at the last sprint-3 commit hash) ──
git tag -a v0.3.0-pre <sprint-3-commit-hash> \
  -m "v0.3.0-pre: Sprint 3 — P.01 numbering, design refinements"

# ── Tag Sprint 4 (current HEAD) ──
git tag -a v0.4.0-pre HEAD \
  -m "v0.4.0-pre: Sprint 4 — top nav, full English, 001 numbering"

# ── Push all tags to remote ──
git push origin --tags
```

To find the commit hash for sprint 3:
```bash
git log --oneline   # find the last commit before sprint-4 work began
```

### Creating GitHub Pre-releases

After pushing tags, go to **GitHub → Releases → Draft a new release**:
1. Choose the tag (e.g. `v0.3.0-pre`)
2. Set the title: `Sprint 3 — v0.3.0-pre`
3. Check **"Set as a pre-release"**
4. Publish

Repeat for each sprint tag.

### Reference commands

```bash
# List all pre-release tags
git tag -l "v0.*-pre"

# Check out a previous sprint for reference
git checkout v0.3.0-pre

# Return to latest
git checkout main
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

| Tag          | Description                                                        |
|--------------|--------------------------------------------------------------------|
| `v0.1.0-pre` | Initial static prototype — sidebar nav, OULIPO constraint design   |
| `v0.2.0-pre` | Full-width layout, project numbering 001–006, full content         |
| `v0.3.0-pre` | Revised project numbering (P.01 format), design refinements        |
| `v0.4.0-pre` | Top nav (sidebar removed), full English, reverted to 001 numbering |

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
