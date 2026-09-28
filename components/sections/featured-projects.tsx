'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Code2, Layers } from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  technologies: string[]
  /** Phone-style screenshots. Up to 3 are shown side by side. */
  images: string[]
  liveUrl?: string
  githubUrl?: string
  /** The featured project gets a wide, full-row card. */
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Diamond Play',
    category: 'Full-Stack Development',
    description:
      'A music streaming platform where listeners discover trending tracks, follow their favourite artists, build playlists and manage their own profile.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    images: [
      '/projects/project-7.jpg',
      '/projects/project-8.jpg',
      '/projects/project-9.jpg',
    ],
    liveUrl: 'https://www.diamondplay.name.ng/',
    // githubUrl: 'https://github.com/wisdom-julius/project-1',
    featured: true,
  },
  {
    title: 'Joviters kitchen',
    category: 'E-commerce',
    description: 'Order your favorite meals from top restaurants, all in one place.',
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    images: [
      '/projects/project-4.jpg',
      '/projects/project-5.jpg',
      '/projects/project-6.jpg',
    ],
    liveUrl: 'https://joviters-kitchen.netlify.app/',
    // githubUrl: 'https://github.com/wisdom-julius/project-2',
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
  },
]

// Tilt/lift for each phone, depending on how many screenshots there are.
const phoneStyles: Record<number, string[]> = {
  1: ['z-10'],
  2: ['-rotate-3 translate-y-2', 'rotate-3 translate-y-6'],
  3: ['-rotate-6 translate-y-6 scale-95', 'z-10 scale-105 -translate-y-1', 'rotate-6 translate-y-6 scale-95'],
}

function PhoneShowcase({ images, title, tall }: { images: string[]; title: string; tall: boolean }) {
  const shown = images.slice(0, 3)
  const styles = phoneStyles[shown.length]

  return (
    <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
      <div className="flex items-center justify-center -space-x-6 sm:-space-x-8 w-full">
        {shown.map((src, i) => (
          <div
            key={src}
            className={`relative shrink-0 aspect-[388/788] transition-all duration-500 ease-out hover:-translate-y-3 ${
              tall ? 'h-[300px] sm:h-[400px]' : 'h-[240px]'
            } ${styles[i]}`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 40vw, 220px"
              className="object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.55)]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ComingSoon() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Layers className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <span className="text-sm text-muted-foreground">Preview coming soon</span>
    </div>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work, designed and built end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const featured = !!project.featured
            const hasImages = project.images.length > 0

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${
                  featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={featured ? 'grid lg:grid-cols-5' : 'flex flex-col h-full'}>
                  {/* Media stage */}
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br from-primary/15 via-card to-background border-border ${
                      featured
                        ? 'lg:col-span-3 lg:order-last h-[380px] sm:h-[480px] border-b lg:border-b-0 lg:border-l'
                        : 'h-[300px] border-b'
                    }`}
                  >
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
                    {hasImages ? (
                      <PhoneShowcase images={project.images} title={project.title} tall={featured} />
                    ) : (
                      <ComingSoon />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col p-6 lg:p-10 ${featured ? 'lg:col-span-2 justify-center' : 'flex-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      {featured && (
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold tracking-tight mb-3 ${featured ? 'text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/40 text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          View Live
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          Source Code
                          <Code2 className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
