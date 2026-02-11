'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Regular icons
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// Brand icons
import {
  faWhatsapp,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contactChannels = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="text-[#ceab2c]" />,
      label: 'Email',
      value: 'propersonalacademy@gmail.com',
      action: 'mailto:propersonalacademy@gmail.com',
      color: 'hover:border-red-500/50'
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} className="text-[#ceab2c]" />,
      label: 'WhatsApp',
      value: 'Message Us',
      action: 'https://wa.me/message/ONCPYX6A7NREJ1',
      color: 'hover:border-green-500/50'
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} className="text-[#ceab2c]" />,
      label: 'Instagram',
      value: 'propersonalacademy',
      action: 'https://www.instagram.com/propersonalacademy',
      color: 'hover:border-pink-500/50'
    },
    {
      icon: <FontAwesomeIcon icon={faFacebook} className="text-[#ceab2c]" />,
      label: 'Facebook',
      value: 'Pro Personal Academy',
      action: 'https://www.facebook.com/share/17sZT82JEq/',
      color: 'hover:border-blue-500/50'
    }
  ]

  const qrCodes = [
    {
      label: 'WhatsApp QR',
      src: '/images/whatsapp_qrcode.png',
      action: 'https://wa.me/message/ONCPYX6A7NREJ1'
    },
    {
      label: 'Instagram QR',
      src: '/images/instagram_qrcode.png',
      action: 'https://www.instagram.com/propersonalacademy'
    },
    {
      label: 'Facebook QR',
      src: '/images/facebook_qrcode.png',
      action: 'https://www.facebook.com/share/17sZT82JEq/'
    }
  ]

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-card/50 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Connect With Us
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm sm:text-base">
            Reach out through your preferred channel. We typically respond within 24 hours.
          </p>
        </div>

        {/* Contact Buttons */}
        <div
          className={`mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.action}
              target={channel.action.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`p-4 sm:p-6 border border-border rounded-lg ${channel.color}
              transition-all duration-300 hover:bg-card/50 group text-center
              transform hover:scale-105`}
            >
              <div className="mb-3 flex justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
                {channel.icon}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                {channel.label}
              </p>
              <p className="text-xs sm:text-sm text-foreground font-medium truncate">
                {channel.value}
              </p>
            </a>
          ))}
        </div>

        {/* QR Codes */}
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">
            Scan to Connect
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {qrCodes.map((qr) => (
              <a
                key={qr.label}
                href={qr.action}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="p-6 bg-background border border-border rounded-lg mb-4
                hover:border-primary/50 transition-all duration-300
                transform group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={qr.src}
                    alt={qr.label}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {qr.label}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10
          border border-primary/20 rounded-lg text-center
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-muted-foreground mb-4">
            Ready to take your English to the next level?
          </p>
          <a
            href="https://wa.me/message/ONCPYX6A7NREJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground
            font-semibold rounded-lg hover:bg-primary/90
            transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}
