import SideNavigation from '../components/SideNavigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const BlogPost = ({ title, excerpt, date, thumbnail, slug }) => (
  <article className="blog-post">
    <div className="blog-thumbnail">
      <Image 
        src={thumbnail || '/images/blog-placeholder.svg'} 
        alt={title}
        width={300}
        height={200}
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="blog-content">
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="blog-excerpt">{excerpt}</p>
      <div className="blog-meta">
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        <Link href={`/blog/${slug}`} className="read-more">Read More</Link>
      </div>
    </div>
  </article>
)

export default function Blog() {
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
  // Sample blog posts - replace with your actual data source
  const blogPosts = [
    {
      slug: 'neuroinformatics-research',
      title: 'Advances in Neuroinformatics Research',
      excerpt: 'Exploring the latest developments in brain-computer interfaces and their applications in healthcare.',
      date: '2024-11-15',
      thumbnail: '/images/blog-neuro.svg'
    },
    {
      slug: 'ai-healthcare',
      title: 'AI Applications in Healthcare Data Analytics',
      excerpt: 'How artificial intelligence is transforming healthcare data analysis and patient outcomes.',
      date: '2024-10-28',
      thumbnail: '/images/blog-ai.svg'
    },
    {
      slug: 'crisis-informatics',
      title: 'Crisis Information Management Systems',
      excerpt: 'Building resilient information systems for crisis response and disaster management.',
      date: '2024-09-20',
      thumbnail: '/images/blog-crisis.svg'
    },
    {
      slug: 'hpc-computing',
      title: 'High Performance Computing for Research',
      excerpt: 'Leveraging HPC resources for complex computational problems in academic research.',
      date: '2024-08-10',
      thumbnail: '/images/blog-hpc.svg'
    }
  ]

  return (
    <>
      <SideNavigation />
      <main className={`blog-container ${isNavCollapsed ? 'nav-collapsed' : ''}`}>
        <header className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts on research, technology, and academia</p>
        </header>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>

        <div className="blog-footer">
          <p>More posts coming soon. Subscribe to stay updated!</p>
        </div>
      </main>
    </>
  )
}