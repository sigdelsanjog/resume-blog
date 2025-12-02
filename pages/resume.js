import SideNavigation from '../components/SideNavigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Resume() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false)

  useEffect(() => {
    const checkNavState = () => {
      const nav = document.querySelector('.side-nav')
      if (nav) {
        setIsNavCollapsed(nav.classList.contains('collapsed'))
      }
    }

    checkNavState()
    const observer = new MutationObserver(checkNavState)
    const nav = document.querySelector('.side-nav')
    if (nav) {
      observer.observe(nav, { attributes: true, attributeFilter: ['class'] })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SideNavigation />
      <main className={`resume-container ${isNavCollapsed ? 'nav-collapsed' : ''}`}>
        <header className="resume-header">
          <div className="resume-title">
            <h1>Sanjog Sigdel</h1>
            <h2>Curriculum Vitae</h2>
          </div>
          <div className="resume-photo">
            <Image src="/images/Sanjog.jpeg" alt="Sanjog Sigdel" width={120} height={120} />
          </div>
        </header>

        <section className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <div className="item-header">
              <h4>Master of Technology in Information Technology (MTech. IT)</h4>
              <span className="date">2020</span>
            </div>
            <p className="institution">Kathmandu University, Nepal</p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Professional Experience</h3>
          <div className="resume-item">
            <div className="item-header">
              <h4>Lecturer</h4>
              <span className="date">Present</span>
            </div>
            <p className="institution">Department of Computer Science and Engineering, Kathmandu University</p>
            <ul className="item-details">
              <li>Teaching undergraduate and graduate courses in computer science</li>
              <li>Research supervision and mentoring</li>
              <li>Curriculum development for Health Informatics</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <div className="item-header">
              <h4>Software Engineer & Project Manager</h4>
              <span className="date">Previous</span>
            </div>
            <p className="institution">U.S. Healthcare Data Analytics Industry</p>
            <ul className="item-details">
              <li>Software development and project management</li>
              <li>Healthcare data analytics and product development</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Research Interests</h3>
          <div className="research-areas">
            <div className="research-item">🧠 Neuroinformatics</div>
            <div className="research-item">🔌 Brain Computer Interface (BCI)</div>
            <div className="research-item">🤖 Artificial Intelligence</div>
            <div className="research-item">⚡ High Performance Computing (HPC)</div>
            <div className="research-item">🏥 Health Informatics</div>
            <div className="research-item">🚨 Crisis Informatics</div>
            <div className="research-item">🗄️ Crisis Information Management Systems</div>
          </div>
        </section>

        <section className="resume-section">
          <h3>Publications & Contributions</h3>
          <div className="resume-item">
            <p>Published author contributing to national and international conferences and peer-reviewed international journals.</p>
            <p><em>Detailed publication list available upon request.</em></p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Professional Service</h3>
          <div className="resume-item">
            <h4>Subject Committee Member</h4>
            <p className="institution">Department of Health Informatics</p>
            <p>Contributing to course curriculum development</p>
          </div>
        </section>

        <div className="resume-footer">
          <p>📧 sanjog.sigdel@ku.edu.np | 📍 Dhulikhel, Kavre | 🌐 sigdelsanjog.com.np</p>
        </div>
      </main>
    </>
  )
}