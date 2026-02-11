'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Pro Personal Academy</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Professional English education with personalized one-to-one classes. At home or online via Zoom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <div className="space-y-1.5 sm:space-y-2">
              {['about', 'stories', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left capitalize"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <a href="mailto:propersonalacademy@gmail.com" className="hover:text-primary transition-colors">
                  Email
                </a>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <a href="https://www.instagram.com/propersonalacademy?igsh=MWxhZHZpeDRoaGpmaw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <a href="https://wa.me/message/ONCPYX6A7NREJ1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <p>© {currentYear} Pro Personal Academy. All rights reserved.</p>
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
