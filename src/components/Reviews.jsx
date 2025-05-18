import { useEffect, useRef, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const testimonials = [
  {
    name: "Riya Agarwal",
    review: "Went on my first solo trip with Hum Nikle Gaddi Leke...",
    rating: 5,
  },
  {
    name: "Aditya Gupta",
    review: "From seamless booking to expertly curated itineraries...",
    rating: 4,
  },
  {
    name: "Dipesh Khawase",
    review: "Had a really smooth and nice experience in Kerala...",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    review: "The support team was fantastic...",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    review: "Unforgettable trip! Everything was so well organized...",
    rating: 4,
  },
  {
    name: "Neha Shah",
    review: "Traveling with Hun Nikle Gaddi Leke was the best decision ever...",
    rating: 4,
  },
];

const ITEM_WIDTH = 320; // 300 + gap

const Reviews = () => {
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
  const [index, setIndex] = useState(3); // Start from first real item after prepending 3 clones
  const trackRef = useRef(null);
  const [noTransition, setNoTransition] = useState(false);

  // Clone 3 items from end and start
  const extended = [
    ...testimonials.slice(-3),
    ...testimonials,
    ...testimonials.slice(0, 3),
  ];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  // Handles transition & jump logic
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Apply transition
    track.style.transition = noTransition
      ? "none"
      : "transform 0.6s ease-in-out";

    // Move track
    track.style.transform = `translateX(-${index * ITEM_WIDTH}px)`;

    // Jump logic after transition ends
    const timeout = setTimeout(() => {
      if (index === extended.length - 3) {
        setNoTransition(true);
        setIndex(3);
      } else if (index === 2) {
        setNoTransition(true);
        setIndex(extended.length - 4);
      }
    }, 600); // match the transition duration

    return () => clearTimeout(timeout);
  }, [index, noTransition, extended.length]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!noTransition) return;

    const timer = setTimeout(() => {
      setNoTransition(false);
    }, 50); // minimal delay to apply the "jump"

    return () => clearTimeout(timer);
  }, [noTransition]);

  return (
    <div id="reviews" className="bg-yellow-100 py-28 px-4 md:px-12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 underline underline-offset-8 decoration-yellow-500">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Hear from our happy customers about their amazing journeys.
      </p>

      <div className="flex items-center justify-center gap-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="bg-yellow-400 shadow-md rounded-full p-3 hover:bg-yellow-500"
        >
          <FaChevronLeft />
        </button>

        <div className="relative w-[960px] overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{
              width: `${extended.length * ITEM_WIDTH}px`,
            }}
          >
            {extended.map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] h-72 bg-yellow-200 shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <div className="flex justify-center text-yellow-500 my-2">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm overflow-hidden text-ellipsis line-clamp-4">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="bg-yellow-400 shadow-md rounded-full p-3 hover:bg-yellow-500"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
