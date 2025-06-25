"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, logo: "/logos/react.png" },
        { name: "Next.js", level: 90, logo: "/logos/next.png" },
        { name: "JavaScript", level: 90, logo: "/logos/javascript.png" },
        { name: "HTML & CSS", level: 95, logo: "/logos/html.png" },
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Node.js & Express", level: 88, logo: "/logos/node.png" },
        { name: "SQL", level: 82, logo: "/logos/sql.png" },
        { name: "MongoDB", level: 85, logo: "/logos/mongodb.png" },
        { name: "Python", level: 75, logo: "/logos/python.png" },
      ],
    },
    {
      title: "Infrastructure & Tooling",
      skills: [
        { name: "Git & GitHub", level: 95, logo: "/logos/git.png" },
        { name: "Docker", level: 75, logo: "/logos/docker.png" },
        { name: "Vercel", level: 80, logo: "/logos/vercel.png" },
        { name: "N8N", level: 80, logo: "/logos/n8n.png" },
      ],
    },
  ]

  return (
    // Responsive vertical padding: less on mobile, more on desktop.
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          // Responsive bottom margin: less space on mobile before the grid.
          className="text-center mb-16 md:mb-20"
        >
          {/* Responsive font size for the main title. */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 md:mb-6">
            My Digital <span className="gradient-text">Toolkit</span>
          </h2>
          {/* Responsive font size for the paragraph. */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of technologies I use to build modern, high-performance web applications.
          </p>
        </motion.div>

        {/*
          Responsive Grid:
          - Default (mobile): `grid-cols-1` (implied, as it's a single column by default).
          - Medium screens (tablets): `md:grid-cols-2`.
          - Large screens (desktops): `lg:grid-cols-3`.
          - Responsive gap: smaller gap on mobile, larger on desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // No change needed here, the delays work well across layouts.
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              // Responsive padding inside the card.
              className="glass p-6 md:p-8 rounded-2xl hover-lift"
            >
              {/* Responsive font size for the category title. */}
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{category.title}</h3>
              {/* Reduced spacing between skill items for a tighter look on mobile. */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        {/* Font size is good for mobile. */}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}