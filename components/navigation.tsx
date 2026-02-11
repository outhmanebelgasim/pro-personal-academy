"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logo.jpg"
              alt="Pro Personal Academy Logo"
              className="h-10 sm:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-xs font-bold uppercase tracking-widest text-foreground">
                Pro
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">
                Personal
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs lg:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium">
              About
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="text-xs lg:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium">
              Stories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs lg:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-in-down">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-2 py-2 text-xs sm:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium rounded hover:bg-primary/5">
              About
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="block w-full text-left px-2 py-2 text-xs sm:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium rounded hover:bg-primary/5">
              Stories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-2 py-2 text-xs sm:text-sm uppercase tracking-wide hover:text-primary transition-colors font-medium rounded hover:bg-primary/5">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
