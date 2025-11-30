# Landing Page (Static)

This repository now contains a minimal static landing page you can host anywhere (GitHub Pages, Netlify, Vercel static sites, etc.). The Django project files were removed per the repo owner's request.

How to edit
- `index.html` — main landing page. Edit headings, paragraphs, and details directly.
- `assets/css/style.css` — styles for the page.
- `assets/images/placeholder.png` — replace with your profile image and update the `src` in `index.html`.

Preview locally
1. From the repo root, run a simple static server (Python 3):

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in a browser
```

Commit and push
1. Stage and commit the changes:

```bash
git add .
git commit -m "Replace Django app with static landing page"
git push origin main
```

Hosting
- For GitHub Pages: enable Pages in repository settings and serve from `main` branch (root).
- For Netlify/Vercel: connect the repo and use default build (no build needed for static files).

If you want, I can:
- add a contact form (static + Formspree or Netlify Forms)
- scaffold multiple pages
- commit the changes for you (I can prepare a commit message)
# Resume-Blog (Django, Vercel PoC)

A minimal Django project, ready to deploy on [Vercel](https://vercel.com/) and point a custom domain (e.g. sigdelsanjog.com.np).

## 🚀 Quick Start
1. **Clone the Repository**
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run locally:**
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```
4. **Deploy to Vercel:**
   - Sign up at [vercel.com](https://vercel.com/)
   - Connect your GitHub repository
   - Vercel will auto-detect `vercel.json`

## 📄 Domain Setup
1. Go to "Settings" in your Vercel project
2. Add your custom domain (e.g., sigdelsanjog.com.np)
3. Follow Vercel's DNS instructions to point your domain

## 📝 Structure
- `requirements.txt`  → Python dependencies
- `vercel.json`       → Vercel deployment config
- Django project      → Root directory (`resume_blog/`, `main/`)

---
Start with a "Hello, World" view at `/`. You can expand this for your landing page and blog system.
