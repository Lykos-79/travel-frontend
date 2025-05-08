import { useState } from "react";

const itinerary = [
  {
    day: "Day 1",
    title: "Okay Tadaa Byee Delhi!",
    content: [
      "We will leave from Delhi around 6 pm in a luxury tempo traveler/Bus.",
      "The trip will start from here itself, with introduction rounds to Antakshri games, Dumb charades, and so much more.",
      "One major break for dinner (Own Expense) and then the party continues.",
    ],
  },
  {
    day: "Day 2",
    title: "MANALI",
    content: [],
  },
  {
    day: "Day 3",
    title: "Solang Valley (Depending upon the road conditions and weather)",
    content: [],
  },
  {
    day: "Day 4",
    title: "Okayy Byee Byee",
    content: [],
  },
  {
    day: "Day 5",
    title: "Reach Delhi",
    content: [],
  },
];

export default function Manali() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">
        Day Wise Plan
      </h2>
      {itinerary.map((item, index) => (
        <div key={index} className="mb-2 border rounded">
          <button
            className={`w-full text-left px-4 py-3 flex justify-between items-center ${
              activeIndex === index ? "bg-blue-100" : "bg-white"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex items-center">
              <span className="bg-blue-700 text-white px-3 py-1 rounded-md mr-2 font-semibold">
                {item.day}
              </span>
              <span className="font-medium">{item.title}</span>
            </span>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <div className="bg-white px-6 py-3 text-gray-700">
              {item.content.length > 0 ? (
                <ul className="list-disc ml-4 space-y-1">
                  {item.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="italic">Details coming soon...</p>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="text-center mt-6">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
