import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import Zoom from "react-medium-image-zoom";
import { useSwipeable } from "react-swipeable";
import { useLocation, useNavigate } from "react-router-dom";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

export default function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();

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
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setSelectedIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    trackMouse: true,
  });

  return (
    <div
      id="gallery"
      className="bg-yellow-100 relative w-full overflow-hidden py-25"
    >
      <h2 className="text-5xl font-bold text-center mb-5 underline underline-offset-8 decoration-yellow-500 ">
        Trip Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8">
        What we do for ourselves dies with us, what we do for others is immortal
      </p>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-scroll no-scrollbar mb-10"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Travel ${idx}`}
            className="w-[400px] h-[400px] object-cover rounded-lg cursor-pointer flex-shrink-0"
            onClick={() => setSelectedIndex(idx % images.length)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/full-gallery")}
          className="border rounded-2xl p-4 bg-yellow-400 hover:bg-yellow-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          Click for more photos
        </button>
      </div>

      {/* Modal with Zoom and Swipe */}
      {selectedIndex !== null && (
        <Dialog
          open={true}
          onClose={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <Dialog.Panel
            {...handlers}
            className="w-[90%] max-w-2xl p-4 bg-transparent flex items-center justify-center"
          >
            <Zoom>
              <img
                src={images[selectedIndex]}
                alt="Zoomed travel"
                className="w-[400px] h-[400px] object-cover rounded-lg"
              />
            </Zoom>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}
