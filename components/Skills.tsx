"use client";

import { motion } from "framer-motion";

const skills = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
           <motion.div
             key={skill}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4, delay: index * 0.1 }}
             viewport={{ once: true }}
             className="bg-slate-800 rounded-xl p-6 text-center hover:bg-blue-600 transition duration-300 shadow-lg"
           >
             <h3 className="font-semibold text-lg">
               {skill}
             </h3>
           </motion.div>
         ))}
        </div>
      </div>
    </section>
  );
}