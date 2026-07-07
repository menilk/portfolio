export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-8 text-center max-w-3xl mx-auto">
          Hello! I'm <span className="text-blue-400 font-semibold">Dagmawi Menilk</span>,
          a Computer Science student and aspiring Full-Stack Software Developer.
          I enjoy solving problems with code and building modern, user-friendly web
          applications.
        </p>

        <p className="text-lg text-gray-300 leading-8 text-center max-w-3xl mx-auto mt-6">
          My programming journey started with C++ and has expanded to JavaScript,
          React, Next.js, Node.js, Express, MySQL, and MongoDB. I'm always eager
          to learn new technologies and create software that has a real impact.
        </p>
      </div>
    </section>
  );
}