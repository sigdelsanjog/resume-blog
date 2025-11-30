# Resume site (Next.js)

This repository now contains a minimal Next.js app for your resume/landing page. It's set up for deployment on Vercel.

How to edit
- `pages/index.js` — the landing page content (headings, paragraph, image reference).
- `public/images/placeholder.svg` — replace with your profile image (or upload another file and update the `src`).
- `styles/globals.css` — global styles for the site.

Local development
1. Install dependencies and run the dev server:

```bash
npm install
npm run dev
# then open http://localhost:3000
```

Build and run production locally
```bash
npm run build
npm start
```

Vercel
- The `vercel.json` configuration is set to build the Next.js app. Connect this repo to Vercel and it will auto-deploy on push to `main`.

Commit and push
```bash
git add .
git commit -m "Scaffold Next.js landing page and update Vercel config"
git push origin main
```

Want more?
- I can add a resume download link, projects section, or contact form.
- I can also commit and push these changes for you if you want.
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
