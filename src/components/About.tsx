'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <h2 className="text-4xl font-bold">Về bản thân</h2>
        <p className="text-lg leading-relaxed">
          Mình là một lập trình viên web với nền tảng vững chắc về React, Next.js và UI/UX hiện đại.
          Mình yêu thích việc tạo ra các sản phẩm số chất lượng cao và tối ưu trải nghiệm người dùng.
        </p>
      </motion.div>
    </section>
  )
}
