"use client";

import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-black">
      <div className="flex flex-col md:flex-row text-white justify-between items-center p-4 md:p-0 md:ml-12 md:mr-12">
        <Link
          href="/"
          className="hover:underline text-2xl font-bold font-montserrat mb-4 md:mb-0"
        >
          utkuomer.eth
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-end">
          <Link
            href="/stack"
            className="hover:underline font-montserrat font-thin p-2 md:p-3"
          >
            Stack
          </Link>
          <Link
            href="/experience"
            className="hover:underline font-montserrat font-thin p-2 md:p-3"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="hover:underline font-montserrat font-thin p-2 md:p-3"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:underline font-montserrat font-thin p-2 md:p-3"
          >
            Contact
          </Link>
          <Link
            href="/CV.pdf"
            className="hover:underline font-montserrat font-thin p-2 md:p-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
