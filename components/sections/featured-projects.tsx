export default function FeaturedProjects() {
  const projects = [
    {
      title: 'SaaS Analytics Platform',
      category: 'Full-Stack Development',
      description: 'Real-time analytics dashboard processing 1M+ events daily.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS']
    },
    {
      title: 'E-commerce Marketplace',
      category: 'Web Development',
      description: 'Multi-vendor marketplace with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with telemedicine features.',
      technologies: ['React Native', 'Firebase', 'Node.js']
    }
  ]

  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects that delivered real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="p-6 lg:p-8">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-xs font-medium rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
