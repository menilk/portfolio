"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >

        <p className="text-blue-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Dagmawi Menilk
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Full-Stack Software Developer
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          I enjoy building modern web applications and solving problems
          through code. My journey started with C++ and continues with
          JavaScript, React, and Next.js.
        </p>

      </motion.div>

    </section>
  );
}