import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideNavigation from "../../components/SideNavigation";
import { getBlogPostBySlug } from "../../data/blog";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  useEffect(() => {
    const checkNavState = () => {
      const nav = document.querySelector(".side-nav");
      if (nav) {
        setIsNavCollapsed(nav.classList.contains("collapsed"));
      }
    };

    checkNavState();

    const observer = new MutationObserver(checkNavState);
    const nav = document.querySelector(".side-nav");
    if (nav) {
      observer.observe(nav, { attributes: true, attributeFilter: ["class"] });
    }

    return () => observer.disconnect();
  }, []);

  // Get blog post by slug
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <SideNavigation />
        <main
          className={`blog-container ${isNavCollapsed ? "nav-collapsed" : ""}`}
        >
          <div className="blog-post-detail">
            <div className="back-link">
              <Link href="/">← Back to Home</Link>
            </div>
            <article className="post-not-found">
              <h1>Post Not Found</h1>
              <p>Sorry, the blog post you're looking for doesn't exist.</p>
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
            </article>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SideNavigation />
      <main
        className={`blog-container ${isNavCollapsed ? "nav-collapsed" : ""}`}
      >
        <div className="blog-post-detail">
          <div className="back-link">
            <Link href="/">← Back to Home</Link>
          </div>
          <article className="blog-article">
            <header className="article-header">
              <h1>{post.title}</h1>
              <div className="article-meta">
                <span className="author">By {post.author}</span>
                <span className="separator">•</span>
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </>
  );
}
