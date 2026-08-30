'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Calendar, MessageSquare, Clock, Shield, Zap, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    budget: '$5,000 - $10,000',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'service_sqr6ba8',
        'template_40m6s28',
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          to_email: 'juliuswisdom224@gmail.com',
        },
        'shz-4cKIsHJzuIsNu'
      )
      setSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Let's Build Something <span className="gradient-text">Amazing Together</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to turn your idea into a successful digital product? 
                I'm currently accepting new projects for this quarter.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Why clients choose to work with me:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: 'Fast turnaround times' },
                  { icon: Shield, text: 'Quality guaranteed' },
                  { icon: Clock, text: 'On-time delivery' },
                  { icon: CheckCircle2, text: 'Transparent pricing' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Prefer to reach out directly?</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:juliuswisdom224@gmail.com" 
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="group-hover:underline">juliuswisdom224@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your message has been sent successfully. I'll get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>E-commerce</option>
                      <option>MVP Development</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option>Under $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is kept confidential. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
