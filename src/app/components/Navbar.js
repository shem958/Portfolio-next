import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">My Portfolio</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`flex space-x-4 md:flex ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-white hover:text-gray-400">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
