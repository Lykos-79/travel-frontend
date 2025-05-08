import React, { useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";

const Treks = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToSection = params.get("scroll");

    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const scrollContainerRef = useRef(null);

  const packages = [
    {
      id: 1,
      name: "Triund Trek",
      location: "Dharamshala",
      duration: "2 days, 1 nights",
      price: "999",
      image: "/treks/Triund.jpeg",
    },
    {
      id: 2,
      name: "Kareri Lake Trek",
      location: "Dharamshala",
      duration: "2 days, 1 nights",
      price: "1499",
      image: "/treks/kareri.png",
    },
    {
      id: 3,
      name: "Thatharna Trek",
      location: "Dharamshala",
      duration: "2 days, 1 nights",
      price: "1599",
      image: "/treks/thatharna.jpeg",
    },
    {
      id: 4,
      name: "Indrahar Pass",
      location: "Dharamshala",
      duration: "4 days, 3 nights",
      price: "5499",
      image: "/treks/indrahar.jpeg",
    },
    {
      id: 5,
      name: "Minkiani Pass",
      location: "Dharamshala",
      duration: "4 days, 3 nights",
      price: "4499",
      image: "/treks/minkiani.jpeg",
    },
    {
      id: 6,
      name: "Kheerganga Trek",
      location: "Kasol",
      duration: "2 days, 1 nights",
      price: "1100",
      image: "/treks/Kheerganga.jpg",
    },
    {
      id: 7,
      name: "Sar Pass",
      location: "Kasol",
      duration: "5 days, 4 nights",
      price: "5999",
      image: "/treks/sar.webp",
    },
    {
      id: 8,
      name: "Hampta Pass",
      location: "Manali",
      duration: "5 days, 4 nights",
      price: "6499",
      image: "/treks/hampta.jpg",
    },
    {
      id: 9,
      name: "Bhrigu Lake",
      location: "Manali",
      duration: "3 days, 2 nights",
      price: "4499",
      image: "/treks/Bhrigu.jpg",
    },
    {
      id: 10,
      name: "Kedarkantha",
      location: "Uttarakhand",
      duration: "5 days, 4 nights",
      price: "7499",
      image: "/treks/kedarkantha.jpg",
    },
    {
      id: 11,
      name: "Kuari Pass",
      location: "Uttarakhand",
      duration: "5 days, 4 nights",
      price: "7999",
      image: "/treks/kuari.webp",
    },
  ];

  const handleScroll = () => {
    const scrollAmount = 324;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    const scrollAmount = 324;
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id="treks" className="bg-yellow-100 py-25 px-4 relative">
      <h2 className="text-4xl sm:text-6xl font-bold text-center text-yellow-500 mb-6">
        Trek Packages
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
        Contact us regarding the same package, confirm your booking <br />
        and enjoy your vacation.
      </p>

      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth pb-4 px-2 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="min-w-[300px] max-w-[300px] h-[430px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-105 transition duration-300 ease-in-out pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-700 via-transparent to-transparent z-10 p-4 flex flex-col justify-end pointer-events-auto">
                <h3 className="text-white text-xl font-semibold">{pkg.name}</h3>
                <div className="flex items-center text-white text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{pkg.location}</span>
                </div>
                <div className="flex items-center text-white text-sm mt-1">
                  <FaClock className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-white font-bold text-lg">
                    ₹{pkg.price}/-
                  </div>
                  <Link to={`/trek/${pkg.id}`}>
                    <button className="bg-yellow-400 text-black px-4 py-1 rounded-md text-sm hover:bg-yellow-600 hover:scale-110 transition-transform duration-300">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <button
          onClick={handleScroll}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition z-20 cursor-pointer"
        >
          <IoIosArrowForward size={24} />
        </button>
        <button
          onClick={handleScrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition z-20 cursor-pointer"
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>
    </div>
  );
};

export default Treks;
