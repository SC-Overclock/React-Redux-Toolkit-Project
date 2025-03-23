import React from "react";
import { FaMeta, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="bg-topbar-default text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex flex items-center space-x-4 ">
          <a href="#" className="hover:text-gray-300">
            <FaMeta className="h-5 w-5 " />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5 " />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin className="h-5 w-5 " />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We Ship Worldwide. Fast And Reliable Shipping</span>
        </div>

        <div className=" hidden md:block text-sm">
          <a href="tel:+917980348212" className="hover:text-gray-300">
            +91 7980-348-212
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
