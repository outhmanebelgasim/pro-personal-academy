"use client";

import { useEffect, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image - Logo */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-full aspect-square bg-card rounded-lg sm:rounded-xl border border-border overflow-hidden flex items-center justify-center animate-glow">
                <img
                  src="/images/first_one.jpeg"
                  alt="Pro Personal Academy Logo"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-3 sm:mb-4">
                About
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                ProPersonal Academy
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base">
                ProPersonal Academy is led by a professional English teacher
                with over 10 years of experience in English language education.
                The academy brings strong international expertise through
                working with learners from diverse backgrounds and completing
                professional training in Morocco, the UK, and the USA. Its
                teaching approach combines global standards with practical
                communication skills, enabling students to make clear,
                confident, and measurable progress. ProProfessional Academy
                provides personalized one-to-one English classes, available at
                home or online via Zoom. Lessons are fully tailored to each
                learner's level, goals, and schedule, with flexible timings to
                fit your lifestyle. The academy specializes in exam preparation,
                including the Moroccan Baccalaureate, Cambridge exams, IELTS,
                TOEFL, and international assessments such as CE1D.
              </p>

              <div className="pt-4 sm:pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Services
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {[
                    "Home Classes",
                    "Online Zoom",
                    "Exam Prep",
                    "Business English",
                    "Conversational",
                    "All Levels",
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
