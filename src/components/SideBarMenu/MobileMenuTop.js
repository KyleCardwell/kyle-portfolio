import React from "react";
import { connect } from 'react-redux'

function MobileMenuTop(props) {


  
  return (
    //   {/* Mobile Menu Top Bar */}
    <div className={"flex justify-between z-40 fixed w-screen md:hidden" + ' bg-' + props.colorScheme.background + " text-" + props.colorScheme.textColor}>
      {/* logo */}
      <a href="#" className={"block p-4 font-bold" + " text-" + (props.activeContainer === 'top' ? props.colorScheme.background : props.colorScheme.textColor)}>
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

const mapStateToProps = state => {
  return({
    colorScheme: state.colorScheme,
    activeContainer: state.activeContainer
  })
}

export default connect(mapStateToProps)(MobileMenuTop);
