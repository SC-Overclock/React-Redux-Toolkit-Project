import React from "react";
import { Link } from "react-router-dom";
import { FaBagShopping, FaCartShopping, FaList, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 ">
        {/* Logo On Left */}

        <div>
          <Link to="/" className="text-2xl font-medium">
            Armado
          </Link>
        </div>

        {/*  Navigation Links In Center */}

        <div className="hidden md:flex space-x-4">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Armory
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Ammunition
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Accessories
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Apparel
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Tactical Gear
          </Link>
        </div>

        {/* Right - Icons */}

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <FaUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Shopping Cart */}
          <button className="relative hover:text-black">
            <FaBagShopping className="h-6 w-6 text-gray-700" />
            <span className="absolute bg-topbar-default text-xs rounded py-0.5 px-1.5 -top-3  text-white">
              9+
            </span>
          </button>

          {/* Search */}

          {/* Cart Drawer */}

          <button>
            <FaList className=" md:hidden h-6 w-6 text-gray-700"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
