# sreemalathi.github.io

Personal portfolio site for Sree Malathi — Data Analytics & AI.

Live at: https://sreemalathi.github.io (once published)

## Structure
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — nav toggle, scroll reveal, contact form
- `assets/` — profile photo (`profile.jpg`) and CV (`Sree_Malathi_CV.pdf`) go here

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
- [ ] Add `assets/profile.jpg` (real headshot)
- [ ] Add `assets/Sree_Malathi_CV.pdf` (Download CV button links here)
- [ ] Swap placeholder `#` project links for real GitHub repo / Tableau Public links
