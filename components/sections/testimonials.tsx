// components/sections/testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Solutions',
    content: 'Working with [Your Name] was a game-changer for our startup. They took our vague idea and turned it into a polished, scalable product that our users love. The attention to detail and communication throughout the project was exceptional.',
    rating: 5,
    project: 'SaaS Platform Development',
    avatar: '/avatars/sarah.jpg',
    company: 'TechStart Solutions'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, DataFlow Analytics',
    content: 'The best freelance developer we\'ve worked with. Not only did they deliver our analytics platform ahead of schedule, but they also suggested improvements that significantly enhanced performance. True partner in every sense.',
    rating: 5,
    project: 'Analytics Dashboard',
    avatar: '/avatars/michael.jpg',
    company: 'DataFlow Analytics'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, CloudNine Apps',
    content: 'Exceptional technical skills combined with great business sense. They understood our goals and delivered a product that exceeded expectations. The code quality is outstanding and easy for our team to maintain.',
    rating: 5,
    project: 'Mobile Application',
    avatar: '/avatars/emily.jpg',
    company: 'CloudNine Apps'
  },
  {
    name: 'David Kim',
    role: 'CTO, InnovateLabs',
    content: 'We needed a complex e-commerce platform built quickly. [Your Name] delivered a robust solution that handles thousands of transactions daily. Their expertise in modern web technologies is impressive.',
    rating: 5,
    project: 'E-commerce Platform',
    avatar: '/avatars/david.jpg',
    company: 'InnovateLabs'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it. Here's what business owners and 
            founders say about working with me.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative bg-card border border-border rounded-2xl p-8 lg:p-12"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
            <Quote className="w-6 h-6 text-primary-foreground" />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
            "{testimonials[currentIndex].content}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonials[currentIndex].project}
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-secondary hover:bg-secondary/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
