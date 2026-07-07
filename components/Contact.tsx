export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          I'm always interested in learning new things,
          building projects, and connecting with other developers.
        </p>

        <div className="space-y-4">

          <p className="text-lg">
            📧 Email:
            <a
              href="mailto:dagmenilk@gmail.com"
              className="text-blue-400 ml-2 hover:underline"
            >
              dagmenilk@gmail.com
            </a>
          </p>

          <p className="text-lg">
            🐙 GitHub:
            <a
              href="https://github.com/menilk"
              target="_blank"
              className="text-blue-400 ml-2 hover:underline"
            >
              github.com/menilk
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}