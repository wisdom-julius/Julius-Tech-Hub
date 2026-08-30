// components/sections/trusted-by.tsx
'use client'

import { motion } from 'framer-motion'

const companies = [
  'TechCorp', 'InnovateLabs', 'StartupX', 'CloudNine', 
  'DataFlow', 'WebSphere', 'AppWorks', 'NextGen'
]

export default function TrustedBy() {
  return (
    <section className="py-16 px-6 lg:px-8 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by forward-thinking companies
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
