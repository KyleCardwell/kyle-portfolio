import React from "react";

export default function SidebarMenuSide(props) {

  return (
    // {/* Sidebar */}
      <div className={`sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${props.showSideBar ? "-translate-x-full " : ""}md:relative md:translate-x-0 z-50 transition duration-200 ease-in-out`}>
        <a href="#" className="text-white flex items-center space-x-2">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="pr-2.5 text-2xl font-bold text-right w-full">Menu</span>
        </a>
        <nav className="text-right">
          <a
            href="#Top"
            className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400"
          >
            Home
          </a>
          <a
            href="#Projects"
            className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400"
          >
            Projects
          </a>
          <a
            href="#About"
            className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400"
          >
            About
          </a>
          <a
            href="#Contact"
            className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400"
          >
            Contact
          </a>
        </nav>

        <div className="border-b-2"></div>

        <section className="text-right">
          <a href="https://github.com/KyleCardwell" className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/kyle-cardwell/" className="block py-2.5 px-4 transition duration-200 hover:bg-blue-400">LinkedIn</a>
        </section>
      </div>
  );
}
