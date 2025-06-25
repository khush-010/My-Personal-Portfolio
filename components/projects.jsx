"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "HelperBuddy",
      description:
        "A full-fledged service booking platform built with Next.js. It features service partner onboarding, Razorpay payments, smart filtering, and an admin dashboard — designed for real-world deployment.",
      image: "/projects/helper-buddy.png",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Razorpay"],
      liveUrl: "https://www.helperbuddy.in/",
      githubUrl: `${process.env.NEXT_PUBLIC_GITHUB}/HelperBuddy-og`,
    },
    {
      title: "Interview Ace",
      description:
        "An AI-powered mock interview platform that generates personalized questions based on resume and role, supports audio answers, and gives intelligent feedback — built for modern job seekers.",
      image: "/projects/interview-ace.png",
      technologies: ["Next.js", "Gemini AI", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://interviewer-ace.vercel.app",
      githubUrl: `${process.env.NEXT_PUBLIC_GITHUB}/Interview-Ace`,
    },
    {
      title: "Personal Portfolio",
      description:
        "A dynamic, performance-optimized developer portfolio featuring motion animations, project showcases, and a custom-built design using Tailwind and Framer Motion.",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://khushdhameliya.vercel.app",
      githubUrl: `${process.env.NEXT_PUBLIC_GITHUB}/My-Personal-Portfolio`,
    },
    {
      title: "MedManager",
      description:
        "A medical store management system with inventory, billing, customer credit tracking, and expired stock alerts — optimized for pharmacy workflows.",
      image: "/projects/medmanager.png",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      liveUrl: "https://medmanager.onrender.com/",
      githubUrl: `${process.env.NEXT_PUBLIC_GITHUB}/MedManager`,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden hover-lift group flex flex-col md:flex-row lg:flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden md:w-3/5 lg:w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="w-full h-64 md:h-full lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col md:w-3/5 lg:w-full">
                <h3 className="text-2xl font-bold mb-3 h-8">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed flex-grow h-32">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 h-14 items-start">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full w-full sm:w-auto"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-full w-full sm:w-auto"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift"
          >
            View All Projects
          </Button> */}
        </motion.div>
      </div>
    </section>
  )
}