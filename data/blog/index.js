import welcoming_2026_with_grace from "./welcoming_2026_with_grace";
import blog_post_2 from "./blog_post_2";
import blog_post_3 from "./blog_post_3";

// Export all blog posts as an array
export const allBlogPosts = [
  welcoming_2026_with_grace,
  blog_post_2,
  blog_post_3,
  // Additional placeholder posts
  {
    slug: "crisis-informatics",
    title: "Crisis Information Management Systems",
    excerpt:
      "Building resilient information systems for crisis response and disaster management.",
    date: "2024-09-20",
    author: "Sanjog Sigdel",
    thumbnail: "/images/blog-crisis.svg",
    content: `
      <p>In times of crisis and disaster, effective information management systems can mean the difference between chaos and coordinated response. Crisis informatics focuses on building resilient systems that can handle the unique challenges of emergency situations.</p>
      
      <p>These systems must be robust, scalable, and capable of operating under adverse conditions. They need to facilitate rapid information sharing among response teams while maintaining accuracy and reliability.</p>
      
      <p>This post discusses the key principles of crisis information management and explores case studies of successful implementations.</p>
    `,
  },
  {
    slug: "hpc-computing",
    title: "High Performance Computing for Research",
    excerpt:
      "Leveraging HPC resources for complex computational problems in academic research.",
    date: "2024-08-10",
    author: "Sanjog Sigdel",
    thumbnail: "/images/blog-hpc.svg",
    content: `
      <p>High Performance Computing (HPC) has become an essential tool for academic research, enabling scientists to tackle complex computational problems that would be intractable on conventional systems.</p>
      
      <p>From climate modeling to genomic analysis, HPC resources provide the computational power needed to process massive datasets and run sophisticated simulations. For researchers, access to HPC infrastructure can accelerate discoveries and enable new types of investigations.</p>
      
      <p>This article explores how researchers can leverage HPC resources and discusses best practices for computational efficiency in research computing.</p>
    `,
  },
];

// Export function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
  return allBlogPosts.find((post) => post.slug === slug);
};

// Export individual posts for direct import
export { welcoming_2026_with_grace, blog_post_2, blog_post_3 };
