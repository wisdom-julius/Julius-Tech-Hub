// components/sections/tech-stack.tsx
// This file renders the "About" section (id="about", linked from the nav).
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Code2,
  Server,
  Database,
  Cloud,
  Target,
  MessageSquare,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Edit these to match your real numbers.
const stats = [
  { value: '5+', label: 'Years building for the web' },
  { value: '40+', label: 'Projects delivered' },
  { value: '100%', label: 'Client satisfaction' },
]

const principles = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every feature earns its place by serving your business goals.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent',
    description: 'Clear updates and honest timelines from first call to launch.',
  },
  {
    icon: Rocket,
    title: 'Built to Scale',
    description: 'Clean architecture that grows with your users and your ambitions.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description: 'Tested, accessible and secure by default, never as an afterthought.',
  },
]

const toolkit = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server, title: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'REST APIs'] },
  { icon: Database, title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
  { icon: Cloud, title: 'DevOps & Cloud', items: ['AWS', 'Docker', 'CI/CD', 'Vercel'] },
]

const alsoUse = [
  'Git', 'Figma', 'Jest', 'Cypress', 'Vite', 'Nginx', 'Kubernetes', 'Terraform',
  'Sentry', 'Stripe', 'Twilio', 'OpenAI API', 'WebSockets', 'PWA', 'Microservices',
]

export default function About() {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Engineering that turns <span className="gradient-text">ambition into impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind every product is a person with a vision. My job is to help you bring it to life,
            and to do it exceptionally well.
          </p>
        </motion.div>

        {/* Story + profile card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Julius</span>, a full-stack developer who
              believes great software starts with understanding the people who will use it. Every product I build
              has one simple goal: to help you move faster, reach further and grow with confidence.
            </p>
            <p>
              I turn ambitious ideas into reliable, beautifully crafted web applications, from the first sketch
              to production launch and beyond. I care about clean architecture, thoughtful design and honest
              communication, so you always know exactly where your project stands.
            </p>
            <p>
              Whether you&apos;re a founder validating an MVP or a team scaling an established product, I bring the
              same standard: work I&apos;m proud to put my name on.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 py-1 text-foreground text-xl font-medium leading-snug">
              Great products aren&apos;t built by accident. They&apos;re built by design, discipline and care.
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button onClick={() => scrollTo('#contact')} size="lg" className="group">
                Work With Me
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollTo('#work')} variant="outline" size="lg">
                See My Work
              </Button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-2xl border border-border bg-card p-8 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative flex items-center gap-4 pb-6 mb-6 border-b border-border">
              <Image src="/logo.svg" alt="" width={71} height={40} className="h-10 w-auto" />
              <div>
                <div className="font-semibold text-lg leading-tight">Julius</div>
                <div className="text-sm text-muted-foreground">Full-Stack Developer</div>
              </div>
            </div>

            <dl className="relative space-y-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="text-3xl font-bold gradient-text">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-8 pt-6 border-t border-border flex items-center gap-3 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-muted-foreground">Open to new projects</span>
            </div>
          </motion.aside>
        </div>

        {/* Principles */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="w-11 h-11 mb-5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Toolkit */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              The Toolkit Behind the <span className="gradient-text">Work</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Modern, proven technologies chosen for speed, security and long-term maintainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {toolkit.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 text-sm rounded-full border border-border bg-secondary/40 text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {alsoUse.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs rounded-full text-muted-foreground border border-border/60 hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
