export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <button onClick={scrollToTop} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                JTH
              </div>
              <span className="font-semibold text-lg">Julius Tech Hub</span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building scalable web applications and digital products that help businesses grow.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <a href="mailto:hello@Julius Tech Hub" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <span>Email:</span>
              <span>hello@juliuswisdom224.com</span>
            </a>
            <div className="flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} Julius Tech Hub. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors text-sm">
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
