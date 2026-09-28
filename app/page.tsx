// app/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import TrustedBy from '@/components/sections/trusted-by'
import Services from '@/components/sections/services'
import FeaturedProjects from '@/components/sections/featured-projects'
import Process from '@/components/sections/process'
import Testimonials from '@/components/sections/testimonials'
import TechStack from '@/components/sections/tech-stack'
import FAQ from '@/components/sections/faq'
import CTASection from '@/components/sections/cta-section'
import Footer from '@/components/footer'
import { useScrollPosition } from '@/hooks/use-scroll-position'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrolledPastThreshold: scrolled } = useScrollPosition(50)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.5])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Fixed background elements */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <motion.div 
        style={{ opacity: backgroundOpacity }}
        className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" 
      />
      
      {/* Ambient glow effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      
      <Navigation scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Services />
        <FeaturedProjects />
        <Process />
        <Testimonials />
        <TechStack />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}
