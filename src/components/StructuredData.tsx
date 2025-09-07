interface StructuredDataProps {
  data: Record<string, unknown>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Person/Professional schema for your homepage
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Peter Mark Ellis",
  "jobTitle": "Visual Designer and Developer",
  "description": "Visual Designer and Developer partnering with founders, enterprises and visionary startups",
  "url": "https://petermarkellis.com",
  "sameAs": [
    // Add your social media profiles here
    // "https://linkedin.com/in/your-profile",
    // "https://twitter.com/your-handle",
    // "https://github.com/your-username"
  ],
  "knowsAbout": [
    "Product Design Engineering",
    "Web Development",
    "SaaS Development",
    "UI/UX Design",
    "Webflow",
    "Framer",
  ],
  "worksFor": {
    "@type": "Super Useful Studio",
    "name": "Freelance"
  }
}

// Portfolio/Creative Work schema
export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Peter Mark Ellis Portfolio",
  "description": "Portfolio showcasing visual design and development work",
  "author": {
    "@type": "Person",
    "name": "Peter Mark Ellis"
  },
  "url": "https://petermarkellis.com"
} 