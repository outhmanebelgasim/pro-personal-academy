'use client'

import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { StudentStories } from '@/components/student-stories'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <StudentStories />
      <Contact />
      <Footer />
    </div>
  )
}
