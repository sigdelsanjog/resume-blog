import { useState, useContext } from 'react'
import { FaLinkedin, FaFacebook, FaEnvelope, FaGraduationCap, FaFlask, FaBars, FaTimes, FaBlog, FaChevronLeft, FaChevronRight, FaSun, FaMoon } from 'react-icons/fa'
import Link from 'next/link'
import { ThemeContext } from '../contexts/ThemeContext'

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleNav = () => setIsOpen(!isOpen)
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sigdelsanjog',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/sanjog.sigdel',
      icon: <FaFacebook />,
      color: '#1877F2'
    },
    {
      name: 'Gmail',
      url: 'mailto:sanjog.sigdel@ku.edu.np',
      icon: <FaEnvelope />,
      color: '#EA4335'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=YOUR_ID',
      icon: <FaGraduationCap />,
      color: '#4285F4'
    },
    {
      name: 'SciHub',
      url: 'https://sci-hub.se',
      icon: <FaFlask />,
      color: '#FF6B35'
    }
  ]

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="nav-toggle"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Side Navigation */}
      <nav className={`side-nav ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="nav-content">
          <div className="nav-header">
            {!isCollapsed && <h3>Sanjog Sigdel</h3>}
            <div className="nav-controls">
              <button 
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
              <button 
                className="collapse-toggle"
                onClick={toggleCollapse}
                aria-label="Toggle sidebar"
                title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
              </button>
            </div>
          </div>
          
          <div className="nav-section">
            {!isCollapsed && <h4>Navigation</h4>}
            <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">🏠</span>
              {!isCollapsed && <span>Home</span>}
            </Link>
            <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaBlog className="nav-icon" />
              {!isCollapsed && <span>Blog</span>}
            </Link>
          </div>

          <div className="nav-section">
            {!isCollapsed && <h4>Connect</h4>}
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--color': link.color }}
                  title={link.name}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-icon">{link.icon}</span>
                  {!isCollapsed && <span>{link.name}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && <div className="nav-overlay" onClick={toggleNav}></div>}
    </>
  )
}

export default SideNavigation