import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const TripPackageSection = () => {
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

  // const packages = [
  //   {
  //     id: 1,
  //     name: "Manali Solang Kasol",
  //     location: "Delhi",
  //     duration: "4 days, 3 nights",
  //     price: "6499",
  //     image: "/trips/Manali2.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Manali Solang",
  //     location: "Delhi",
  //     duration: "3 days, 2 nights",
  //     price: "5999",
  //     image: "about.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Kasol Kheerganga",
  //     location: "Delhi/Chandigarh",
  //     duration: "3 days, 2 nights",
  //     price: "5999",
  //     image: "/trips/Kheerganga.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Tirthan Jibhi Kasol",
  //     location: "Delhi/Chandigarh",
  //     duration: "4 days, 3 nights",
  //     price: "7499",
  //     image: "/trips/Tirthan.jpeg",
  //   },
  //   {
  //     id: 5,
  //     name: "McLeodganj Bir",
  //     location: "Delhi/Chandigarh",
  //     duration: "3 days, 2 nights",
  //     price: "5999",
  //     image: "/trips/Bir.jpeg",
  //   },
  //   {
  //     id: 6,
  //     name: "Chopta Chandrashila",
  //     location: "Delhi",
  //     duration: "3 days, 2 nights",
  //     price: "5999",
  //     image: "/trips/Chopta.jpeg",
  //   },
  // ];

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    fetch(`${API}/api/trips?category=trek`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched trips data:", data);
        setPackages(data);
      })
      .catch((err) => console.error("Error fetching trips:", err));
  }, []);

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
    <>
      <Helmet>
        <title>Weekend Getaways & Short Trips | MyTravelSite</title>
        <meta
          name="description"
          content="Short on time? Explore our handpicked weekend getaways perfect for a quick escape from city life."
        />
        <meta
          property="og:title"
          content="Weekend Getaways & Short Trips | MyTravelSite"
        />
        <meta
          property="og:description"
          content="Affordable and exciting weekend travel plans with detailed itineraries and flexible pricing."
        />
        <meta
          property="og:url"
          content="https://humniklegaddileke.com/weekend-trips"
        />
        <link
          rel="canonical"
          href="https://humniklegaddileke.com/weekend-trips"
        />
      </Helmet>

      <div id="trips" className="bg-yellow-100 py-25 px-4 relative">
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-yellow-500 mb-6">
          Weekend Trips
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
                key={pkg._id}
                className="min-w-[300px] max-w-[300px] h-[430px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-105 transition duration-300 ease-in-out pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700 via-transparent to-transparent z-10 p-4 flex flex-col justify-end pointer-events-auto">
                  <h3 className="text-white text-xl font-semibold">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-white text-sm mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center text-white text-sm mt-1">
                    <FaClock className="mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {pkg.multiPrice?.quad ? (
                      <div className="text-white font-bold text-lg">
                        ₹{pkg.multiPrice.quad}/-
                      </div>
                    ) : (
                      <div className="text-white font-bold text-lg">
                        ₹{pkg.price || "N/A"}/-
                      </div>
                    )}
                    <Link to={`/trip/${pkg._id}`}>
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
    </>
  );
};

export default TripPackageSection;
