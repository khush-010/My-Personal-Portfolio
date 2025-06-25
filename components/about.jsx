"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write modular, efficient, and scalable code — balancing performance with maintainability.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "I design intuitive and modern UIs that not only look great but elevate user experience.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Every project I build is optimized for speed and responsiveness across all devices.",
    },
  ]

  return (
    <section id="about" className="py-28 bg-gray-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer blending logic and design to build smart, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-10 rounded-2xl hover-lift shadow-xl">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 text-lg leading-8">
                Over the past few years, I've engineered platforms ranging from AI-powered interview tools to service marketplaces.
                My journey began with curiosity and quickly evolved into a passion for building solutions that scale and serve real-world needs.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-8">
                I specialize in technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>, and enjoy crafting immersive UIs using <strong>Tailwind CSS</strong> and animation libraries.
                Whether it's integrating speech-to-text or setting up secure payment systems, I love solving meaningful problems with code.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["React", "Next.js", "JavaScript", "Node.js", "MongoDB", "Tailwind","Python","C/C++"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.07, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover-lift transition-shadow shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500
 rounded-xl text-white shadow-sm">
                    <feature.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
