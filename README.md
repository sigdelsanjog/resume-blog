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
