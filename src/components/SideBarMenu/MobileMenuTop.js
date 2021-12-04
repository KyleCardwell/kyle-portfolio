import React from "react";

export default function MobileMenuTop(props) {
  //   const sidebar = document.querySelector('.sidebar')

  //   const handleClick = () => {
  //     sidebar.classList.toggle("-translate-x-full")
  //   }

  
  return (
    //   {/* Mobile Menu Top Bar */}
    <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      {/* logo */}
      <a href="#" className="block p-4 text-white font-bold">
        Kyle Cardwell
      </a>

      {/* mobile menu button */}
      <button
        className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        onClick={() => props.toggleSideMenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
