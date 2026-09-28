'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Project 1 Name',
    category: 'Full-Stack Development',
    description: 'A music streaming platform.',
    technologies: ['Next.js', 'TypeScript', 'mongoDB', 'Tailwind CSS'],
    images: [
      '/projects/project-1.jpg',
      '/projects/project-2.jpg',
      '/projects/project-3.jpg',
    ],
    liveUrl: 'https://www.diamondplay.name.ng/',
    // githubUrl: 'https://github.com/wisdom-julius/project-1',
    featured: true,
  },
  {
    title: 'Project 2 Name',
    category: 'Web Development',
    description: 'Description of what this project does.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    images: [
      '/projects/project-4.jpg',
      '/projects/project-5.jpg',
      '/projects/project-6.jpg',
    ],
    liveUrl: 'joviters-kitchen.netlify.app',
    // githubUrl: 'https://github.com/wisdom-julius/project-2',
    featured: false,
  },
  {
    title: 'Project 3 Name',
    category: 'Mobile Development',
    description: 'Description of what this project does.',
    technologies: ['React Native', 'Firebase'],
    images: [
      // '/projects/project-3-1.jpg',
      // '/projects/project-3-2.jpg',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/wisdom-julius/project-3',
    featured: false,
  },
]

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  // Auto-slide when hovering
  useEffect(() => {
    if (isHovering && images.length > 1) {
      intervalRef.current = setInterval(next, 1500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering, images.length])

  return (
    <div
      className="relative aspect-video overflow-hidden bg-secondary/50 group/carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`${title} screenshot ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.preventDefault()
            prev()
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background hover:scale-110"
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.preventDefault()
            next()
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background hover:scale-110"
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                setCurrent(index)
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === current
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-xs font-medium">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Dark overlay for buttons visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects that delivered real business value. Hover to preview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Carousel */}
              <ProjectCarousel images={project.images} title={project.title} />

              {/* Hover action buttons */}
              <div className="absolute bottom-[calc(100%-14rem)] right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none group-hover:pointer-events-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg hover:bg-background transition-colors"
                  >
                    Code
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-xs font-medium rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
