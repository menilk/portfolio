export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
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
          I enjoy building modern, responsive web applications and learning new
          technologies. My journey started with C++ and has grown into modern
          web development using JavaScript, React, and Next.js.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            View Projects
          </button>

          <button className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}