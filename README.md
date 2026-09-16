# sreemalathi.github.io

Personal portfolio site for Sree Malathi — Data Analytics & AI.

Live at: https://sreemalathi.github.io (once published)

## Structure
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — mobile nav toggle
- `images/profile.jpg` — your headshot (hero section)
- `cv.pdf` — your CV, at the repo root (linked from the "Download CV" button)

## Local preview
Just open `index.html` in a browser — no build step needed.

## Deploy (GitHub Pages)
1. Create an empty repo on GitHub named exactly `sreemalathi.github.io`.
2. From this folder:
   ```
   git remote add origin https://github.com/Sreemalathi/sreemalathi.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. In the repo's Settings → Pages, set Source to "Deploy from branch", branch `main`, folder `/ (root)`. (Often this is automatic for a `<username>.github.io` repo.)
4. Site goes live at https://sreemalathi.github.io within a minute or two.

## To do
- [ ] Add `images/profile.jpg` (real headshot)
- [ ] Add `cv.pdf` at the repo root (Download CV button links here)
- [ ] `View Code` links currently point to your GitHub profile generally — swap in the actual repo URL for each project once they're up
- [ ] The Eniac × Magist "Tableau Public" link points to a tinyurl placeholder — swap for your real Tableau Public link
