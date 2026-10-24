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
      title:
        "A Bounded Reclaim Actuator for PSI-Guided Compressed Memory: A Controlled Ablation",
      authors: "A Dhakal, S Sigdel",
      year: "2026",
      type: "Preprint",
      publisher: "Arxiv",
      journalrank: "",
      link: "https://arxiv.org/pdf/2608.13689",
    },
    {
      title:
        "Predicting Tuberculosis Case Counts with Machine Learning Based on Climate and Air Pollution Factors in Nepal",
      authors: "S Bhandari, RK Mahato, JJ Kaasbøll, S Sigdel, R Bista",
      year: "2026",
      type: "Conference",
      publisher: "Springer Nature",
      journalrank: "Q3",
      link: "https://link.springer.com/chapter/10.1007/978-3-032-30982-2_12",
    },
    {
      title:
        "A hybrid dense convolutional network and fuzzy inference system for pneumonia diagnosis with dynamic symptom tracking",
      authors: "S Baral, R Bista, S Sigdel, JC Ferreira",
      year: "2025",
      type: "Journal",
      publisher: "Plos one",
      journalrank: "Q1",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0334899",
    },

    {
      title:
        "An Artificial Intelligence Driven Semantic Similarity-Based Pipeline for Rapid Literature",
      authors: "A Dhakal, K Paudel, S Sigdel",
      year: "2025",
      type: "Preprint",
      publisher: "Arxiv",
      journalrank: "",
      link: "https://arxiv.org/pdf/2509.15292",
    },

    {
      title:
        "Leveraging Machine Learning for Enhanced Bug Triaging in Open-Source Software Projects",
      authors: "N Adhikari, R Bista, S Sigdel",
      year: "2025",
      type: "Preprint",
      publisher: "IEEE",
      journalrank: "",
      link: "https://ieeexplore.ieee.org/abstract/document/11106424/",
    },

    {
      title: "A Study Of Sudoku Solving Algorithms: Backtracking and Heuristic",
      authors:
        "A Bhattarai, D Uprety, P Pathak, SN Shrestha, S Narkarmi, S Sigdel",
      year: "2025",
      type: "Conference",
      publisher: "ICANOPT",
      journalrank: "",
      link: "https://arxiv.org/abs/2507.09708",
    },
    {
      title:
        "Enhancing Ethical Reasoning in Tiny Language Models via Fine-Tuning and Multi-Agent Consensus",
      authors: "S Adhikari, S Sharma, D Lamichhane, S Sigdel",
      year: "2025",
      type: "Conference",
      publisher: "NCCI",
      journalrank: "",
      link: "https://ncci.ku.edu.np/uploads/archive/1770520274687-Enhancing_Ethical_Reasoning_in_Tiny_Language_Models_via_Fine_Tuning_and_Multi_Agent_Consensus-Sushan-Adhikari.pdf",
    },
    {
      title:
        "Improving Evaluation Measures Using Ensemble Technique in Diabetes Dataset",
      authors: "R Bista, B Sharma, S Khanal, S Sigdel, JC Ferreira",
      year: "2025",
      type: "Conference",
      publisher: "Springer",
      journalrank: "",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-78946-5_9",
    },
    {
      title:
        "Gait Analysis for Early Detection of Cardiovascular Diseases Using MPU-6050 Sensor: An Analytical Framework with Data Augmentation Algorithm",
      authors: "R Bista, S Sigdel, JC Ferreira",
      year: "2025",
      type: "Conference",
      publisher: "Springer Nature",
      journalrank: "",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-78946-5_10",
    },
    {
      title:
        "Designing Crisis Intelligence System for Nepal: Towards Real-Time, Multi-Sectoral, Interoperable Emergency Coordination",
      authors: "S Sanjog, P Dawadi",
      year: "2025",
      type: "Poster",
      publisher:
        "International Conference on Science and Technology Information Management System: Practices and Experiences",
      journalrank: "",
      link: "https://doi.org/10.13140/RG.2.2.32982.15682",
    },
    {
      title:
        "Extended Study of Gait Analysis in Identification of Cardiovascular Diseases",
      authors: "R Bista, S Sigdel, JC Ferreira",
      year: "2024",
      type: "Journal",
      publisher:
        "International Journal of Computer Information Systems and Industrial Management Applications",
      journalrank: "",
      link: "https://www.researchgate.net/profile/Sanjog-Sigdel/publication/380896824_Extended_Study_of_Gait_Analysis_in_Identification_of_Cardiovascular_Diseases/links/665430bd0b0d2845745bec01/Extended-Study-of-Gait-Analysis-in-Identification-of-Cardiovascular-Diseases.pdf",
    },
  ];

  const navigationItems = [
    {
      id: "blog",
      label: "Blog",
      description: "Research insights and thoughts",
      icon: "📝",
    },
    {
      id: "resume",
      label: "Resume",
      description: "Academic and professional background",
      icon: "📄",
    },
    {
      id: "research",
      label: "Research",
      description: "Publications and projects",
      icon: "🔬",
    },
    {
      id: "contact",
      label: "Contact",
      description: "Get in touch",
      icon: "📞",
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
                    <h3>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.title}
                      </a>
                    </h3>
                    <span className={`paper-type ${paper.type.toLowerCase()}`}>
                      {paper.type}
                    </span>
                  </div>
                  <p className="paper-authors">{paper.authors}</p>
                  <p className="paper-venue">
                    ({paper.publisher},{paper.year}), {paper.journalrank}
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
                  {/* <div className="qr-code">
                    <Image
                      src="/images/qr-code.svg"
                      alt="QR Code"
                      width={80}
                      height={80}
                    />
                    <span>sigdelsanjog.com.np</span>
                  </div> */}
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
                        href="https://linkedin.com/in/sigdelsanjog"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      <a href="https://ku.edu.np/contact-detail/sanjog-sigdel">
                        KU Profile
                      </a>
                      <a href="https://github.com/sigdelsanjog">GitHub</a>

                      <a href="https://scholar.google.com/citations?hl=en&user=c24maKAAAAAJ">
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
            <div className="nav-buttons" role="tablist" aria-label="Explore">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-button ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  role="tab"
                  aria-selected={activeSection === item.id}
                  title={item.description}
                >
                  <span className="button-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="button-content">
                    <h4>{item.label}</h4>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section: Dynamic Content */}
        <section className="bottom-section">{renderContent()}</section>
      </main>
    </>
  );
}
