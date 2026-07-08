"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Dagmawi Menilk"
            width={350}
            height={350}
            priority
            className="rounded-full border-4 border-blue-500 shadow-2xl object-cover w-72 h-72"
          />
        </div>

        {/* Hero Content */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Dagmawi Menilk
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Computer Science Student & Full-Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            I am a Computer Science graduate from Debre Tabor University with
            a passion for building modern web applications. My journey started
            with C++ and has expanded to JavaScript, React, Next.js,
            TypeScript, and Node.js. I enjoy solving real-world problems
            through software development and continuously improving my skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="/Dagmawi-Menilk-CV.pdf"
              download
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}