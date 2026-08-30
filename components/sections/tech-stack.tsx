// components/sections/tech-stack.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  Layers,
  Boxes,
  Shield
} from 'lucide-react'

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    technologies: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'Next.js', level: 90, color: 'bg-purple-500' },
      { name: 'TypeScript', level: 85, color: 'bg-cyan-500' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' }
    ]
  },
  {
    icon: Server,
    title: 'Backend',
    technologies: [
      { name: 'Node.js', level: 90, color: 'bg-green-500' },
      { name: 'Python', level: 80, color: 'bg-yellow-500' },
      { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
      { name: 'REST APIs', level: 95, color: 'bg-orange-500' }
    ]
  },
  {
    icon: Database,
    title: 'Databases',
    technologies: [
      { name: 'PostgreSQL', level: 90, color: 'bg-blue-500' },
      { name: 'MongoDB', level: 85, color: 'bg-green-500' },
      { name: 'Redis', level: 80, color: 'bg-red-500' },
      { name: 'Prisma ORM', level: 85, color: 'bg-purple-500' }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS', level: 85, color: 'bg-orange-500' },
      { name: 'Docker', level: 80, color: 'bg-blue-500' },
      { name: 'CI/CD', level: 85, color: 'bg-green-500' },
      { name: 'Vercel', level: 90, color: 'bg-gray-500' }
    ]
  }
]

export default function TechStack() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern, proven technologies to build fast, secure, and 
            scalable applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className={`h-full ${tech.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Figma', 'Jest', 'Cypress', 'Webpack', 'Vite', 
              'Nginx', 'Kubernetes', 'Terraform', 'Sentry', 'Datadog',
              'Jira', 'Slack API', 'Stripe', 'PayPal', 'Twilio', 'SendGrid',
              'OpenAI API', 'WebSockets', 'PWA', 'SSR', 'SSG', 'Microservices'
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary/50 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
