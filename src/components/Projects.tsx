'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Trang web cá nhân dùng Next.js và Tailwind CSS.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Ứng dụng quản lý chi tiêu',
    description: 'Ứng dụng giúp người dùng quản lý chi tiêu cá nhân thông minh.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10">Dự án</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="border p-6 rounded-lg shadow hover:shadow-xl transition text-left"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600 my-2">{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                Xem chi tiết →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
