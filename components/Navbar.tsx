"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-500">
          Dagmawi Menilk
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-6 pb-6 space-y-4 text-center">

          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>

        </ul>
      )}

    </nav>
  );
}