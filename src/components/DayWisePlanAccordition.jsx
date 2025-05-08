import { useState } from "react";

export default function DayWisePlanAccordion({ itinerary }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-6 p-4 bg-white rounded shadow-2xl">
      <button className="text-2xl font-bold mb-4 border-b-4 border-yellow-600 inline-block">
        Day Wise Plan
      </button>
      {itinerary.map((item, index) => (
        <div key={index} className="mb-2 border rounded">
          <button
            className={`w-full text-left px-4 py-3 flex justify-between items-center ${
              activeIndex === index ? "bg-yellow-200" : "bg-white"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex items-center">
              <span className="bg-yellow-700 text-white px-3 py-1 rounded-md mr-2 font-semibold w-20">
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
    </div>
  );
}
