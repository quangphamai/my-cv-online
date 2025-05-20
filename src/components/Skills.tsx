'use client'
import { motion } from 'framer-motion'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git']

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-lg py-4 px-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
