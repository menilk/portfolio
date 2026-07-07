export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Dagmawi Menilk. All rights reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with Next.js, React, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
}