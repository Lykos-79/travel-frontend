import { useState } from "react";
import React, { useRef } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CallbackModal from "./CallbackModal";

const HoneyMoonPackages = () => {
  const scrollContainerRef = useRef(null);

  const packages = [
    {
      id: 1,
      name: "Kerela",
      duration: "7 days, 6 nights",
      price: "29,999",
      image: "/trips/Manali2.jpg",
    },
    {
      id: 2,
      name: "Maldives",
      duration: "4 days, 3 nights",
      price: "49,999",
      image: "/international/maldives.jpg",
    },
    {
      id: 3,
      name: "Bali",
      duration: "7 days, 6 nights",
      price: "39,999",
      image: "/trips/Kheerganga.jpg",
    },
    {
      id: 4,
      name: "Andaman",
      duration: "5 days, 4 nights",
      price: "24,999",
      image: "/trips/Tirthan.jpeg",
    },
    {
      id: 5,
      name: "Sri Lanka",
      duration: "5 days, 4 nights",
      price: "29,999",
      image: "/trips/Bir.jpeg",
    },
    {
      id: 6,
      name: "Himachal Pradesh",
      duration: "7 days, 6 nights",
      price: "19,999",
      image: "/trips/Chopta.jpeg",
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

  const [showModal, setShowModal] = useState(false);

  return (
    <div id="trips" className="bg-yellow-100 py-25 px-4 relative">
      <h2 className="text-4xl sm:text-6xl font-bold text-center text-yellow-500 mb-6">
        HoneyMoonPackages
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
                {/* <div className="flex items-center text-white text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{pkg.location}</span>
                </div> */}
                <div className="flex items-center text-white text-sm mt-1">
                  <FaClock className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-white font-bold text-lg">
                    Starting from: ₹{pkg.price}/-
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-yellow-400 text-black px-4 py-1 rounded-md text-sm hover:bg-yellow-600 hover:scale-110 transition-transform duration-300"
                  >
                    Enquire now
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Custom Package Card */}
          <div className="min-w-[300px] max-w-[300px] h-[430px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg bg-white border-2 border-yellow-400 flex flex-col justify-between p-5">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                Customize Your Trip
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Didn't find what you were looking for? Build your own honeymoon
                package tailored to your dream destination.
              </p>
              <ul className="list-disc text-sm text-gray-600 pl-4 space-y-1">
                <li>Pick your destination</li>
                <li>Set your budget</li>
                <li>Choose activities</li>
              </ul>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md text-sm hover:bg-yellow-600 hover:scale-105 transition-transform duration-300"
            >
              Enquire now
            </button>
            <CallbackModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
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

export default HoneyMoonPackages;
