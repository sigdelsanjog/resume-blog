import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideNavigation from "../components/SideNavigation";
import { allBlogPosts } from "../data/blog";

export default function Home() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("blog"); // Default to showing recent blogs

  useEffect(() => {
    const checkNavState = () => {
      const nav = document.querySelector(".side-nav");
      if (nav) {
        setIsNavCollapsed(nav.classList.contains("collapsed"));
      }
    };

    // Check initially
    checkNavState();

    // Listen for changes
    const observer = new MutationObserver(checkNavState);
    const nav = document.querySelector(".side-nav");
    if (nav) {
      observer.observe(nav, { attributes: true, attributeFilter: ["class"] });
    }

    return () => observer.disconnect();
  }, []);

  // Use imported blog posts data
  const blogPosts = allBlogPosts;

  const researchPapers = [
    {
      title: "Brain-Computer Interface for Healthcare Applications",
      authors: "S. Sigdel, et al.",
      venue: "International Conference on Neuroinformatics 2024",
      year: "2024",
      type: "Conference",
    },
    {
      title: "Crisis Information Systems: A Comprehensive Review",
      authors: "S. Sigdel, A. Kumar",
      venue: "Journal of Crisis Informatics",
      year: "2023",
      type: "Journal",
    },
    {
      title: "High Performance Computing in Health Informatics",
      authors: "S. Sigdel",
      venue: "HPC Healthcare Symposium",
      year: "2023",
      type: "Conference",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "blog":
        return (
          <div className="content-section">
            <h2>Recent Blog Posts</h2>
            <div className="blog-grid-inline">
              {blogPosts.map((post) => (
                <article key={post.slug} className="blog-post-inline">
                  <div className="blog-thumbnail-inline">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={200}
                      height={120}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="blog-content-inline">
                    <h3>{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <time>{new Date(post.date).toLocaleDateString()}</time>
                      <Link href={`/blog/${post.slug}`} className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case "resume":
        return (
          <div className="content-section">
            <h2>Resume</h2>
            <div className="resume-content-inline">
              <div className="resume-section-inline">
                <h3>Education</h3>
                <div className="resume-item-inline">
                  <h4>
                    Master of Technology in Information Technology (MTech. IT)
                  </h4>
                  <span className="date">2020</span>
                  <p>Kathmandu University, Nepal</p>
                </div>
              </div>

              <div className="resume-section-inline">
                <h3>Professional Experience</h3>
                <div className="resume-item-inline">
                  <h4>Lecturer</h4>
                  <span className="date">Present</span>
                  <p>
                    Department of Computer Science and Engineering, Kathmandu
                    University
                  </p>
                </div>
                <div className="resume-item-inline">
                  <h4>Software Engineer & Project Manager</h4>
                  <span className="date">Previous</span>
                  <p>U.S. Healthcare Data Analytics Industry</p>
                </div>
              </div>

              <div className="resume-section-inline">
                <h3>Research Interests</h3>
                <div className="research-areas-inline">
                  <span className="research-tag">🧠 Neuroinformatics</span>
                  <span className="research-tag">
                    🔌 Brain Computer Interface
                  </span>
                  <span className="research-tag">
                    🤖 Artificial Intelligence
                  </span>
                  <span className="research-tag">
                    ⚡ High Performance Computing
                  </span>
                  <span className="research-tag">🏥 Health Informatics</span>
                  <span className="research-tag">🚨 Crisis Informatics</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "research":
        return (
          <div className="content-section">
            <h2>Research Publications</h2>
            <div className="research-papers">
              {researchPapers.map((paper, index) => (
                <article key={index} className="research-paper">
                  <div className="paper-header">
                    <h3>{paper.title}</h3>
                    <span className={`paper-type ${paper.type.toLowerCase()}`}>
                      {paper.type}
                    </span>
                  </div>
                  <p className="paper-authors">{paper.authors}</p>
                  <p className="paper-venue">
                    {paper.venue} ({paper.year})
                  </p>
                </article>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="content-section">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info-section">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  <p>
                    📧 <strong>Email:</strong> sanjog.sigdel@ku.edu.np
                  </p>
                  <p>
                    📍 <strong>Location:</strong> Dhulikhel, Kavre, Nepal
                  </p>
                  <p>
                    🏫 <strong>Office:</strong> Department of Computer Science
                    and Engineering
                  </p>
                  <p>
                    🌐 <strong>Website:</strong> sigdelsanjog.com.np
                  </p>
                </div>
              </div>
              <div className="social-links-section">
                <h3>Connect Online</h3>
                <div className="social-buttons">
                  <a
                    href="https://linkedin.com/in/sanjog-sigdel"
                    className="social-button linkedin"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=YOUR_ID"
                    className="social-button scholar"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="mailto:sanjog.sigdel@ku.edu.np"
                    className="social-button email"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SideNavigation />
      <main className={`container ${isNavCollapsed ? "nav-collapsed" : ""}`}>
        {/* Top Section: 1/3 Business Card + 2/3 Navigation */}
        <section className="top-section">
          <div className="business-card-section">
            <div className="business-card">
              <div className="card-content">
                <div className="card-left">
                  <div className="photo">
                    <Image
                      src="/images/Sanjog.jpeg"
                      alt="Profile"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="qr-code">
                    <Image
                      src="/images/qr-code.svg"
                      alt="QR Code"
                      width={80}
                      height={80}
                    />
                    <span>sigdelsanjog.com.np</span>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-info">
                    <h1>Sanjog Sigdel</h1>
                    <h2>Lecturer</h2>
                    <p className="affiliation">
                      Department of Computer Science and Engineering
                      <br />
                      Kathmandu University
                    </p>
                    <div className="contact-info">
                      <p>📧 sanjog.sigdel@ku.edu.np</p>
                      <p>📍 Dhulikhel, Kavre</p>
                    </div>
                    <div className="social-links-card">
                      <a
                        href="https://linkedin.com/in/sanjog-sigdel"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://scholar.google.com/citations?user=YOUR_ID"
                        target="_blank"
                      >
                        Scholar
                      </a>
                      <a href="mailto:sanjog.sigdel@ku.edu.np">Email</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navigation-section">
            <h3>Explore</h3>
            <div className="nav-buttons">
              <button
                onClick={() => setActiveSection("blog")}
                className={`nav-button ${
                  activeSection === "blog" ? "active" : ""
                }`}
              >
                <div className="button-icon">📝</div>
                <div className="button-content">
                  <h4>Blog</h4>
                  <p>Research insights and thoughts</p>
                </div>
              </button>
              <button
                onClick={() => setActiveSection("resume")}
                className={`nav-button ${
                  activeSection === "resume" ? "active" : ""
                }`}
              >
                <div className="button-icon">📄</div>
                <div className="button-content">
                  <h4>Resume</h4>
                  <p>Academic and professional background</p>
                </div>
              </button>
              <button
                onClick={() => setActiveSection("research")}
                className={`nav-button ${
                  activeSection === "research" ? "active" : ""
                }`}
              >
                <div className="button-icon">🔬</div>
                <div className="button-content">
                  <h4>Research</h4>
                  <p>Publications and projects</p>
                </div>
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`nav-button ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                <div className="button-icon">📞</div>
                <div className="button-content">
                  <h4>Contact</h4>
                  <p>Get in touch</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Section: Dynamic Content */}
        <section className="bottom-section">{renderContent()}</section>
      </main>
    </>
  );
}
