"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            // Responsive font size: smaller on mobile, larger on desktop
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-center"
          >
            Hi, I'm <span className="gradient-text">Khush Dhameliya</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            // Responsive font size and margin
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-4"
          >
            <span className="inline-block animate-pulse">Engineer.</span>{' '}
            <span className="inline-block animate-pulse delay-[200ms]">Designer.</span>{' '}
            <span className="inline-block animate-pulse delay-[400ms]">Builder.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            // Responsive font size and margin
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-center"
          >
            I craft full-stack platforms that blend sleek UI with smart backend logic — from AI-powered mock interviews to service marketplaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            // Flex direction is column on mobile, row on larger screens
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* The commented-out button is also responsive if you decide to use it */}
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500
text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift pulse-glow w-full sm:w-auto"
            >
              View My Work
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(`${process.env.NEXT_PUBLIC_CV}`, "_blank")}
              // Full width on mobile for better tap target, auto width on larger screens
              className="border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift w-full sm:w-auto"
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-16"
          >
            {[
              { icon: Github, href: `${process.env.NEXT_PUBLIC_GITHUB}` },
              { icon: Linkedin, href: `${process.env.NEXT_PUBLIC_LINKEDIN}` },
              { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                // Slightly smaller padding on mobile for better fit
                className="p-2 sm:p-3 glass rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {/* Responsive icon size */}
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            // Adjusted bottom position for mobile
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <ArrowDown size={24} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}