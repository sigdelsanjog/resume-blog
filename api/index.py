from resume_blog.asgi import application as app

# Vercel Python serverless function expects a callable named `app`.
# This imports the Django ASGI application so Vercel can invoke it.