// components/sections/faq.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary based on scope and complexity. Simple landing pages typically start at $2,000, while full web applications range from $5,000 to $50,000+. I provide detailed quotes after understanding your specific requirements during our initial consultation.',
    category: 'Pricing'
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'Timeline depends on project scope. A simple website takes 2-3 weeks, while complex applications can take 2-3 months. I provide detailed timelines during the planning phase and keep you updated throughout development.',
    category: 'Timeline'
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes! I offer flexible maintenance packages that include regular updates, security patches, performance monitoring, and feature additions. Most clients opt for monthly retainers after launch.',
    category: 'Support'
  },
  {
    question: 'What is your development process?',
    answer: 'I follow an agile approach with regular communication. We start with discovery, move to design, then development with weekly updates, followed by testing and deployment. You\'ll have access to a staging environment throughout.',
    category: 'Process'
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! I frequently collaborate with in-house teams, providing specialized expertise or additional bandwidth. I integrate smoothly with your existing workflows and tools.',
    category: 'Collaboration'
  },
  {
    question: 'Do you sign NDAs and contracts?',
    answer: 'Yes, I regularly work under NDA and sign standard contracts. Your intellectual property and confidential information are always protected. I can also provide references from past clients.',
    category: 'Legal'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before starting your project.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {faq.category}
                  </span>
                  <span className="font-semibold">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                ) : (
                  <Plus className="w-5 h-5 shrink-0" aria-hidden="true" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <MessageCircle className="w-5 h-5" />
            <span>Still have questions?</span>
            <a href="#contact" className="text-primary font-medium hover:underline inline-flex items-center ml-2">
              Contact me
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
