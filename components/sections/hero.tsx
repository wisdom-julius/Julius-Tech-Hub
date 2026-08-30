
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Code2, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block">Building Digital Products</span>
            <span className="block mt-2">
              <span className="gradient-text">That Drive Business Growth</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            I partner with startups and established businesses to design and build 
            scalable web applications, MVPs, and digital experiences that turn 
            ideas into revenue-generating products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="group w-full sm:w-auto text-base px-8"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={scrollToWork}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12"
          >
            {[
              { icon: Rocket, title: '5+ Years', description: 'Building for web' },
              { icon: Code2, title: '40+ Projects', description: 'Delivered successfully' },
              { icon: Shield, title: '100%', description: 'Client satisfaction' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-3 bg-secondary/30 backdrop-blur-sm border border-border rounded-xl px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
