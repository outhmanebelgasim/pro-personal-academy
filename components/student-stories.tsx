"use client";

import { useState, useEffect } from "react";

export function StudentStories() {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("stories");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Images (add as many as you want)
  const sessions = [
    { id: 1, image: "/images/1.jpeg" },
    { id: 2, image: "/images/2.jpeg" },
    { id: 3, image: "/images/3.jpeg" },
    { id: 4, image: "/images/4.jpg" },
    { id: 5, image: "/images/5.jpg" },
    { id: 6, image: "/images/6.jpeg" },
  ];

  // Pagination logic (3 per page)
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(sessions.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section
      id="stories"
      className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Student Success
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Student <span className="gradient-text">Success Stories</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Real moments from our one-to-one English sessions.
          </p>
        </div>

        {/* Slider Grid */}
        <div
          className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {sessions
              .slice(
                page * ITEMS_PER_PAGE,
                page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
              )
              .map((session) => (
                <div
                  key={session.id}
                  className="group relative overflow-hidden rounded-xl
                  border border-border hover:border-primary/50 transition-all duration-300">
                  <img
                    src={session.image}
                    alt="Student session"
                    className="w-full aspect-square object-cover
                    transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
          </div>

          {/* Controls */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-4 top-1/2 -translate-y-1/2
                bg-background border border-border shadow
                w-10 h-10 rounded-full flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground transition">
                ‹
              </button>

              <button
                onClick={nextPage}
                className="absolute -right-4 top-1/2 -translate-y-1/2
                bg-background border border-border shadow
                w-10 h-10 rounded-full flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground transition">
                ›
              </button>
            </>
          )}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all
              ${page === index ? "bg-primary scale-125" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
