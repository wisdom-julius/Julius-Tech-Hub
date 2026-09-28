'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette, 
  Gauge, 
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Custom web applications built with modern technologies that scale with your business.',
    features: ['React & Next.js', 'Node.js', 'MongoDB'],
    price: 'From $5,000',
    popular: true,
  },

  {
    icon: Cloud,
    title: 'E-commerce Solutions',
    description: 'High-converting online stores and marketplaces. Custom shopping experiences that drive sales and customer loyalty.',
    features: ['Custom storefronts', 'Payment integration', 'Inventory management', 'Analytics & optimization'],
    price: 'From $4,000',
    popular: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Design & Development',
    description: 'Beautiful, intuitive interfaces that users love. Design-driven development that improves engagement and conversion rates.',
    features: ['User-centered design', 'Responsive interfaces', 'Design systems', 'Accessibility focused'],
    price: 'From $2,500',
    popular: false,
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Speed up your existing application. Improve load times, SEO rankings, and user experience with targeted optimizations.',
    features: ['Core Web Vitals', 'Code optimization', 'CDN setup', 'Caching strategies'],
    price: 'From $1,500',
    popular: false,
  },
  {
    icon: Lock,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance for your business. Architecture reviews, technology selection, and development roadmaps.',
    features: ['Architecture review', 'Tech stack selection', 'Code audits', 'Team mentoring'],
    price: 'From $150/hr',
    popular: false,
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Services That Deliver <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is an opportunity to create something exceptional. 
            Here&apos;s how I can help your business succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col ${
                service.popular 
                  ? 'border-primary/50 bg-primary/5' 
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 mb-6 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                  <span className="text-sm font-semibold text-foreground">{service.price}</span>
                  <Button variant="link" className="text-sm text-primary font-medium hover:underline inline-flex items-center h-auto p-0 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
