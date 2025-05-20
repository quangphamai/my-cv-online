'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-600 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">
          Xin chào, mình là <span className="text-yellow-400">Minh Quang</span>
        </h1>
        <p className="text-xl opacity-80">
          Một lập trình viên đam mê xây dựng web hiện đại & trải nghiệm người dùng xuất sắc.
        </p>
        <a
          href="#about"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Tìm hiểu thêm
        </a>
      </motion.div>
    </section>
  )
}
