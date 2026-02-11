'use client'

import { useEffect, useState } from 'react'

interface ExperienceItem {
  year: string
  title: string
  organization: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    year: '2023-Present',
    title: 'Senior English Instructor',
    organization: 'Private Tutoring Practice',
    description: 'Managing a successful private tutoring practice with 50+ active students from various backgrounds and proficiency levels.'
  },
  {
    year: '2019-2023',
    title: 'English Language Specialist',
    organization: 'International Language Institute',
    description: 'Taught English to non-native speakers with focus on business communication and exam preparation.'
  },
  {
    year: '2016-2019',
    title: 'English Teacher',
    organization: 'Secondary Education',
    description: 'Developed comprehensive curriculum for secondary and advanced students, with emphasis on critical thinking and writing skills.'
  },
  {
    year: '2015-2016',
    title: 'TESOL Certified Instructor',
    organization: 'Adult Education Center',
    description: 'Completed TESOL certification and began teaching English to adult learners from diverse linguistic backgrounds.'
  }
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })

    const element = document.getElementById('experience')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-3 sm:mb-4 animate-fade-in-up">Experience</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h3>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 md:p-8 border border-border rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div className="md:col-span-1">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                    {exp.year}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                  <p className="text-primary text-xs sm:text-sm font-semibold mb-2 sm:mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {['TESOL Certification', 'Cambridge CELTA', 'Advanced Diploma in ELT', 'Business English Certificate'].map((cert, index) => (
              <div
                key={cert}
                className={`p-3 sm:p-4 border border-border rounded-lg flex items-center gap-3 hover:border-primary/50 transition-colors ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.15}s` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                <span className="text-xs sm:text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
