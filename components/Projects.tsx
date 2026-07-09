"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive developer portfolio built to showcase my skills, projects, and experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/menilk/portfolio",
  },
  {
    title: "DTU Campus Navigation System",
    description:
      "A web-based campus navigation system designed to help students and visitors find buildings, rooms, and locations inside Debre Tabor University.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Leaflet",
      "OpenStreetMap",
      "MySQL",
    ],
    github: "https://github.com/menilk/dtu-campus-navigation",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl p-8 shadow-lg hover:-translate-y-2 transition"
             >

              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View GitHub →
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}