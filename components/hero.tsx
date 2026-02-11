"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-16 md:pb-20 flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="gradient-text">Master English</span>
              <br />
              with Pro Personal Academy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg">
              We offer personalized one-to-one English classes, available at our
              academy, at home, or online via Zoom, fully tailored to each
              learner’s level, goals, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={scrollToContact}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Get Started
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Image - Mohamed Belgasim */}
          <div
            className={`${isLoaded ? "animate-fade-in-down" : "opacity-0"} order-first md:order-last`}>
            <div className="relative">
              <div className="w-full aspect-square bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden group cursor-pointer animate-glow">
                <img
                  src="/images/logo.jpg"
                  alt="Mohamed Belgasim - English Teacher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border border-primary/20 rounded-xl sm:rounded-2xl group-hover:border-primary/50 transition-colors" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t border-border">
          <div
            className="animate-fade-in-up text-center sm:text-left"
            style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">
              10+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Years Experience
            </p>
          </div>
          <div
            className="animate-fade-in-up text-center sm:text-left"
            style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">
              500+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Students Taught
            </p>
          </div>
          <div
            className="animate-fade-in-up text-center sm:text-left"
            style={{ animationDelay: "0.6s" }}>
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">
              95%
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
