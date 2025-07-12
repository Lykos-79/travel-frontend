import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const handleHomeClick = () => {
  window.scrollTo(0, 0);
};

export default function Navbar() {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isTripDetailPage = location.pathname.startsWith("/trip/");
  const isTrekDetailPage = location.pathname.startsWith("/treks/");
  const isTermsconditions = location.pathname.startsWith(
    "/terms-and-conditions"
  );
  const isGalleryPage = location.pathname.startsWith("/full-gallery");

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const backgroundStyle =
    navbar ||
    isTripDetailPage ||
    isTrekDetailPage ||
    isTermsconditions ||
    isGalleryPage
      ? "bg-yellow-500 shadow-md"
      : "bg-transparent bg-opacity-50";

  const textColor =
    navbar ||
    isTripDetailPage ||
    isTrekDetailPage ||
    isTermsconditions ||
    isGalleryPage
      ? "text-black"
      : "text-white";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/?scroll=about", label: "About" },
    { to: "/?scroll=trips", label: "Trips" },
    { to: "/?scroll=treks", label: "Treks" },
    { to: "/?scroll=international-trips", label: "International" },
    { to: "/?scroll=reviews", label: "Reviews" },
    { to: "/?scroll=gallery", label: "Gallery" },
    { to: "/?scroll=contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition duration-500 ease-in-out ${backgroundStyle}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick}>
          <img
            className="w-40 h-18 object-cover rounded-full transition-transform duration-300 hover:scale-110"
            src="/LOGO1.svg"
            alt="logo"
          />
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 font-medium mt-1.5 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "block absolute top-16 left-0 w-full bg-yellow-500 md:static md:bg-transparent"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group text-center py-2 md:py-0">
              <Link
                to={link.to}
                onClick={() => {
                  handleHomeClick();
                  setIsMenuOpen(false); // close on mobile click
                }}
                className={`cursor-pointer flex flex-col items-center ${textColor}`}
              >
                <span className="group-hover:text-gray-700 transition-colors duration-300">
                  {link.label}
                </span>
                <div className="h-1 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
