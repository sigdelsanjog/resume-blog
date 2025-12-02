import Image from 'next/image'
import Link from 'next/link'
import SideNavigation from '../components/SideNavigation'

export default function Home() {
  return (
    <>
      <SideNavigation />
      <main className="container">
      <section className="business-card">
        <div className="card-content">
          <div className="card-left">
            <div className="photo">
              <Image src="/images/Sanjog.jpeg" alt="Profile" width={120} height={120} />
            </div>
            <div className="qr-code">
              <Image src="/images/qr-code.svg" alt="QR Code" width={80} height={80} />
              <span>sigdelsanjog.com.np</span>
            </div>
          </div>
          <div className="card-right">
            <div className="card-info">
              <h1>Sanjog Sigdel</h1>
              <h2>Lecturer</h2>
              <p className="affiliation">Department of Computer Science and Engineering<br/>Kathmandu University</p>
              <div className="contact-info">
                <p>📧 sanjog.sigdel@ku.edu.np</p>
                <p>📍 Dhulikhel, Kavre</p>
              </div>
              <div className="social-links-card">
                <a href="https://linkedin.com/in/sanjog-sigdel" target="_blank">LinkedIn</a>
                <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank">Scholar</a>
                <a href="mailto:sanjog.sigdel@ku.edu.np">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="navigation-section">
        <h3>Explore</h3>
        <div className="nav-buttons">
          <Link href="/blog" className="nav-button primary">
            <div className="button-icon">📝</div>
            <div className="button-content">
              <h4>Blog</h4>
              <p>Research insights and thoughts</p>
            </div>
          </Link>
          <Link href="/resume" className="nav-button">
            <div className="button-icon">📄</div>
            <div className="button-content">
              <h4>Resume</h4>
              <p>Academic and professional background</p>
            </div>
          </Link>
          <Link href="/research" className="nav-button">
            <div className="button-icon">🔬</div>
            <div className="button-content">
              <h4>Research</h4>
              <p>Publications and projects</p>
            </div>
          </Link>
          <Link href="/contact" className="nav-button">
            <div className="button-icon">📞</div>
            <div className="button-content">
              <h4>Contact</h4>
              <p>Get in touch</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
