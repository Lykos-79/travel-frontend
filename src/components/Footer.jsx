import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 border-t-4 border-yellow-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Brand Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Hum Nikle Gaddi Leke</h2>
          <p className="text-sm mt-2">humniklegaddileke@gmail.com</p>
          <p className="text-sm">+91 92142 02206</p>
        </div>

        {/* Important Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg mb-2">Important Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="#contact" className="hover:text-gray-700">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#about" className="hover:text-gray-700">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-gray-700">
                Terms & Conditions <br /> & Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Follow us on Social Media
          </h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.instagram.com/hum_nikle_gaddi_leke?igsh=MTBlNnpjOG1saTY0OA== "
              target="_blank"
              className="hover:text-gray-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-8">
        © 2025 Hum Nikle Gaddi Leke
      </div>
    </footer>
  );
};

export default Footer;
