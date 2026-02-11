'use client'

import { useState, useEffect } from 'react'

interface Activity {
  id: number
  title: string
  description: string
  category: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Interactive Conversation Workshop',
    description: 'Students engage in real-world dialogue practice with native speaker corrections and confidence building exercises.',
    category: 'Workshop'
  },
  {
    id: 2,
    title: 'Business English Certification Program',
    description: 'Comprehensive course covering professional communication, presentations, and corporate language skills.',
    category: 'Course'
  },
  {
    id: 3,
    title: 'Literary Discussion Group',
    description: 'Advanced learners analyze contemporary literature, develop critical thinking, and enhance cultural understanding.',
    category: 'Group'
  }
]

export function Activities() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })

    const element = document.getElementById('activities')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  return (
    <section id="activities" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-3 sm:mb-4 animate-fade-in-up">Activities</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learning <span className="gradient-text">Experiences</span>
          </h3>
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
            Explore the diverse activities and programs I offer to enhance your English learning journey.
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-2xl border border-border bg-card group">
            <div className="relative h-64 sm:h-80 md:h-96 transition-all duration-500">
              {activities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 p-4 sm:p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="px-2 sm:px-3 py-1 bg-primary/30 rounded-full">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-balance">
                      {activity.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary/40 hover:bg-primary/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full border border-primary/50 text-primary hover:bg-primary/20 transition-all opacity-0 sm:opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full border border-primary/50 text-primary hover:bg-primary/20 transition-all opacity-0 sm:opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
            {activities.map((activity, index) => (
              <button
                key={activity.id}
                onClick={() => setActiveSlide(index)}
                className={`p-2 sm:p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  index === activeSlide
                    ? 'border-primary bg-card'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                  {activity.category}
                </p>
                <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                  {activity.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Placeholder Images */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-4 sm:mb-6">
            Photo Gallery
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video bg-card rounded-lg sm:rounded-lg border border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <div className="text-center px-4">
                    <div className="text-3xl sm:text-4xl mb-2">📷</div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Activity Photo {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
