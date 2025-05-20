'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl font-bold">Liên hệ</h2>
        <p>Bạn có thể liên hệ với mình qua email hoặc mạng xã hội!</p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition"
        >
          Gửi email
        </a>
      </motion.div>
    </section>
  )
}
