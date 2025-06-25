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
    // Increased vertical padding for more breathing room
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          // Increased bottom margin to give more space before the grid
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Digital <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of technologies I use to build modern, high-performance web applications.
          </p>
        </motion.div>

        {/* Reverted to 3 columns, with a larger gap for a less crowded feel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // Adjusted delay for 3 columns
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              // Increased padding inside the card
              className="glass p-8 rounded-2xl hover-lift"
            >
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">{category.title}</h3>
              {/* Increased spacing between skill items */}
              <div className="space-y-8">
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
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        {/* <span className="text-sm text-gray-400">{skill.level}%</span> */}
                      </div>
                      {/* <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div> */}
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