// components/sections/process.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Search, 
  PenTool, 
  Code2, 
  TestTube2, 
  Rocket,
  RefreshCw,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We start with a deep dive into your business goals, target audience, and technical requirements to create a clear roadmap.',
    deliverables: ['Requirements document', 'Technical architecture', 'Project timeline', 'Success metrics'],
    duration: 'Week 1',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'I create wireframes and high-fidelity designs that align with your brand and optimize for user experience.',
    deliverables: ['Wireframes', 'UI/UX design', 'Interactive prototype', 'Design system'],
    duration: 'Week 2-3',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Code2,
    title: 'Development & Integration',
    description: 'Clean, scalable code is written following best practices. Regular updates keep you informed throughout the build.',
    deliverables: ['Working application', 'API integration', 'Database setup', 'Third-party services'],
    duration: 'Week 3-8',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: TestTube2,
    title: 'Testing & QA',
    description: 'Comprehensive testing ensures your product works flawlessly across all devices and edge cases.',
    deliverables: ['Bug fixes', 'Performance optimization', 'Cross-browser testing', 'Security audit'],
    duration: 'Week 8-9',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Your product goes live with full support. I ensure smooth deployment and provide training if needed.',
    deliverables: ['Production deployment', 'Documentation', 'Team training', '30-day support'],
    duration: 'Week 10',
    color: 'from-yellow-500/20 to-amber-500/20'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            A Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear communication and transparency at every step. You'll always 
            know where your project stands.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? '' : 'lg:[direction:rtl]'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </div>

                <div className={`lg:[direction:ltr] ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-2xl`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-7 h-7" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center lg:[direction:ltr]">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
