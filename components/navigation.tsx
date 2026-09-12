'use client'

import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavigationProps {
  scrolled: boolean
}

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 group"
            >
              <Image 
                src="/logo.svg" 
                alt="Julius Tech Hub Logo" 
                width={40} 
                height={40}
                className="w-9 h-9 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-semibold text-lg hidden sm:block">Julius Tech Hub</span>
            </button>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-20"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-semibold text-left py-4 border-b border-border hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="mt-8 w-full text-lg"
                size="lg"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
