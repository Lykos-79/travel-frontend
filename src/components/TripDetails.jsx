import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DayWisePlanAccordion from "./DayWisePlanAccordition";
import CallbackModal from "./CallbackModal";

const packages = [
  {
    id: 1,
    name: "Manali Solang Kasol",
    location: "Delhi",
    duration: "4 days, 3 nights",
    price: {
      quad: 6499,
      triple: 6999,
      twin: 7599,
    },
    image: "/trips/Manali2.jpg",
    inclusions: [
      "Great vibes with new friendships",
      "Bonfire night and Dj Night",
      "Travel by luxury tempo traveler/Volvo bus",
      "Refreshments during the journey",
      "Meals: 3 Breakfasts 3 Dinners",
      "Accommodation ( Quad Basis )",
      "Guides charges and all other permits",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Okay Tadaa Byee Delhi!",
        content: [
          "We will leave from Delhi around 6 pm in a luxury tempo traveler/Volvo Bus/Car.",
          "Our first major stop will be for dinner. (Own Expenses)",
          "Intro-session, Antakshri and Dumb charades during the journey.",
        ],
      },
      {
        day: "Day 2",
        title: "MANALI",
        content: [
          "We will wish each other “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",
          "We will reach Manali in the morning.",
          "Visit Hadimba Temple and cherish the traditional Himachali architecture, Mall road, and shop-hopping in Main Manali",
          "Reach the hotel for an awesome dinner and DJ night",
        ],
      },
      {
        day: "Day 3",
        title:
          "Solang Valley & Atal tunnel (Depending upon the road conditions and weather",
        content: [
          "Have a Complimentary Breakfast and leave for the beautiful Solang Valley & Atal tunnel..",
          "Click photos there and spend some time witnessing the eternal beauty, indulging in winter games, snow fights, snow dance, etc.",
          "Back to the Hotel for a delicious dinner along with Bonfire with music.",
          "Overnight stay in hotel",
        ],
      },
      {
        day: "Day 4",
        title: "Kullu, Kasol & Manikaran",
        content: [
          "Breakfast in the hotel",
          "Post breakfast, we will leave for Kullu, here we can do Paragliding or River rafting. (own expenses)",
          "After that, we will leave for Manikaran and take a dip in the hot water spring. WOW",
          "We will have BONFIRE NIGHT and since it's the last night no one is allowed to sleep. Okay, a little sleep will be fine.",
          "Dinner will be served.",
        ],
      },
      {
        day: "Day 5",
        title: "Cafe Hopping",
        content: [
          "Open your eyes with beautiful mountains in front, relax your body, and have your complimentary Breakfast early in the morning to avoid chaos.",
          "We will go for a trek to Chalal.",
          "Enjoy the mesmerizing views of the valley.",
          "SAY BYE BYE TO MOUNTAINS AND HELLO TO NEW FrIENDS",
          "We will leave Kasol around 5 pm",
        ],
      },
      {
        day: "Day 6",
        title: "Reach Delhi",
        content: [
          "We'll reach Delhi the next morning.",
          "Okay, Guys! we hope to see you on this trip and cheers for many more to come!",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Manali Solang",
    location: "Delhi",
    duration: "3 days, 2 nights",
    price: {
      quad: 5999,
      triple: 6599,
      twin: 6999,
    },
    image: "/trips/solang.jpg",
    inclusions: [
      "Amazing vibes with great bondings",
      "Travel by luxury tempo traveler/bus",
      "Bonfire and DJ night",
      "Meals: 2 Breakfasts, 2 Dinners",
      "Accommodation",
      "Guide charges",
      "All transfers and sightseeing",
      "Toll, fuel, parking",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
      "Any traveling expense incurred due to extreme weather conditions, or natural hazards.",
    ],
    dayWisePlan: [
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
        content: [
          "We will wish each other “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",
          "We will reach Manali at around 11 in the morning.",
          "Post some rest in the Manali Hotel, we will visit Hadimba Temple and cherish the traditional Himachali architecture, Mall road, and shop-hopping in Main Manali",
          "DJ night, bonfire, dinner and some amazing games.",
        ],
      },
      {
        day: "Day 3",
        title: "Solang Valley (Depending upon the road conditions and weather",
        content: [
          "Have a Complimentary Breakfast and leave for the beautiful Solang Valley.",
          "Click photos there and spend some time witnessing the eternal beauty, indulging in winter games, snow fights, snow dance, etc.",
          "Back to the Hotel for a delicious dinner and DJ Night.",
          "Overnight stay in hotel.",
        ],
      },
      {
        day: "Day 4",
        title: "Okayy Byee Byee",
        content: [
          "Breakfast in the hotel",
          "Let's enjoy some more time in Manali.",
          "How about shopping or some amazing videos and photos? So much to do guys, Jaldi breakfast karo!",
          "We will leave for Delhi in the evening.",
        ],
      },
      {
        day: "Day 5",
        title: "Reach Delhi",
        content: ["We'll reach Delhi the next morning."],
      },
    ],
  },
  {
    id: 3,
    name: "Kasol Kheerganga",
    location: "Delhi/Chandigarh",
    duration: "3 days, 2 nights",
    price: {
      quad: 5999,
      triple: 6599,
      twin: 6999,
    },
    image: "/trips/Kheerganga.jpg",
    inclusions: [
      "Travel by luxury tempo traveler/bus",
      "Meals: 2 Breakfasts, 2 Dinners",
      "Accommodation (Quad Basis)",
      "Guide charges and all other permits",
      "All transfers and sightseeing",
      "Toll, fuel and parking charges",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Okay Tadaa Byee Delhi!",
        content: [
          "We will leave from Delhi around 6 pm in a luxury tempo traveler/Volvo Bus/Car.",
          "Refreshments like water bottles and eatables will be provided at the start of the journey.",
          "Our first major stop will be for dinner (Own expense).",
          "Antakshri, Dumb charades and Intro-sessions during the journey.",
        ],
      },
      {
        day: "Day 2",
        title: "Reach Kasol",
        content: [
          "We will wish each other “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",
          "We will reach our hotel/camp in the morning.",
          "Riverside Pictures, Manikaran Gurudwara and Shopping at Kasol market.",
          "DJ night, bonfire, dinner, truth and dare and amazing games.",
        ],
      },
      {
        day: "Day 3",
        title: "Kheergangaaaa",
        content: [
          "Good morning Peeps! It's a kheerganga day.",
          "Have Breakfast and leave for Barshaini",
          "Kheerganga is a 13Km trek and “Kasam se kaafi sundar hai”. It will take around 4-6 hours all depending on your speed to complete it.",
          "Let's enjoy amazing starry night with soft music and lots of gossip.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek down and leave for Delhi",
        content: [
          "Open your eyes to beautiful mountains.",
          "Have your complimentary Breakfast and start trek down to Barshaini early morning.",
          "After reaching Barshaini, We will leave for Delhi in the evening.",
        ],
      },
      {
        day: "Day 5",
        title: "Reach Delhi",
        content: [
          "Reach Delhi the next day morning.",
          "Jaldii milte hai fir!!",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tirthan Jibhi Kasol",
    location: "Delhi/Chandigarh",
    duration: "4 days, 3 nights",
    price: {
      quad: 7499,
      triple: 7999,
      twin: 8599,
    },
    image: "/trips/Tirthan.jpeg",
    inclusions: [
      "Travel by luxury tempo traveler/bus",
      "Refreshments during the journey",
      "Meals: 3 Breakfasts 3 Dinners",
      "Accommodation ( Quad Basis )",
      "Guides charges and all other permits",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Okay Tadaa Byee Delhi!",
        content: [
          "We will leave from Delhi around 6 pm in a luxury tempo traveler/Volvo Bus/Car.",
          "Refreshments like water bottles and eatables will be provided at the start of the journey.",
          "Our first major stop will be for dinner.",
          "Intro-session, Antakshri and Dumb charades during the journey.",
        ],
      },
      {
        day: "Day 2",
        title: "Reach Tirthan Valley",
        content: [
          "We will wish each other “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",
          "Check-in to our homestay/hotel/camps and enjoy the view, Later leave for a small jungle trail to Jibhi waterfall, Mini Thailand and cafes.",
          "Return back to the hotel in the evening and enjoy dance night.",
        ],
      },
      {
        day: "Day 3",
        title: "Jaloori and Raghupur Fort",
        content: [
          "Good morning Peeps! It's Raghupur Fort day trek.",
          "Have Breakfast and leave for Jalori Pass(the starting destination of the trek )",
          "“Jai Mata di ka Jaikara” and let's begin our trek.",
          "It's a 4 Km trek and “Kasam se kaafi sundar hai”. It will take around 2 hours",
          "Have an amazing time at Raghupur Fort and then trek back to Jalori Pass.",
          "Lots of games, dinner, and overnight stay in cute homestays/hotel .",
        ],
      },
      {
        day: "Day 4",
        title: "Kasol and Manikaran Day",
        content: [
          "Breakfast in the hotel",
          "Post breakfast, we will leave for Kasol",
          "After that, we will leave for Manikaran and take a dip in the hot water spring. WOW",
          "We will have BONFIRE NIGHT and since it's the last night no one is allowed to sleep. Okay, a little sleep will be fine.",
          "Dinner will be served.",
        ],
      },
      {
        day: "Day 5",
        title: "Cafe Hopping",
        content: [
          "Open your eyes with beautiful mountains in front, relax your body, and have your complimentary Breakfast early in the morning to avoid chaos.",
          "We will go for a trek to Chalal.",
          "Enjoy the mesmerizing views of the valley.",
          "We will leave Kasol around 6 pm",
        ],
      },
      {
        day: "Day 6",
        title: "Reach Delhi",
        content: [
          "We'll reach Delhi the next morning.",
          "Bye Guys! Vaada karo milte rahoge and touch mein rahoge.",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "McLeodganj Bir",
    location: "Delhi/Chandigarh",
    duration: "3 days, 2 nights",
    price: {
      quad: 5999,
      triple: 6599,
      twin: 6999,
    },
    image: "/trips/Bir.jpeg",
    inclusions: [
      "Travel by luxury tempo traveler/bus",
      "Meals: 2 Breakfasts 2 Dinners",
      "Accommodation ( Quad Basis )",
      "Guides charges and all other permits",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Leave from Delhi",
        content: [
          "We will leave from Delhi around 6 pm in a luxury tempo traveler/ Bus/Car.",
          "Our first major stop will be for dinner(Own Expenses).",
          "Intro-session, Antakshri and Dumb charades during the journey.",
        ],
      },
      {
        day: "Day 2",
        title: "Mcleodganj",
        content: [
          "Wake up early and post breakfast leave for Mcleodganj.",
          "Post check-in visit the very famous Namgyal Monastery, Bhagsu waterfall and Bhagsunath temple.",
          "Reach hotel for an awesome dinner.",
        ],
      },
      {
        day: "Day 3",
        title: "Bir and Paragliding",
        content: [
          "We will wish each other “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",
          "We will reach Bir in the morning.",
          "Post check-in relax for a while and later we'll head out for Paragliding from the second-highest take-off point for paragliding in the world.",
          "Afterwards, we'll witness beautiful sunset from the sunset point as well.",
          "Visit Bir Local market for some shopping and explore some of the local restaurants/cafe for some Tibetan cuisine.",
          "Dinner, Bonfire and overnight stay in Bir.",
        ],
      },
      {
        day: "Day 4",
        title: "Okay bye bye",
        content: [
          "Breakfast will be served.",
          "Let's enjoy some more time in Mcleodganj",
          "What about shopping or some amazing videos and photos? So much to do guys.",
          "Post that we will also make a stop at the famous Dharamshala cricket stadium.",
          "We will leave for Delhi in the evening",
        ],
      },
      {
        day: "Day 5",
        title: "Reach Delhi",
        content: [
          "We'll reach Delhi the next day morning.",
          "Milte hai jald firr!!",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Chopta Chandrashila",
    location: "Delhi",
    duration: "3 days, 2 nights",
    price: {
      quad: 5999,
      triple: 6599,
      twin: 6999,
    },
    image: "/trips/Chopta.jpeg",
    inclusions: [
      "Travel by luxury tempo traveler/bus",
      "Refreshments during the journey",
      "Meals: 2 Breakfasts 2 Dinners",
      "Accommodation ( Quad Basis )",
      "Guides charges and all other permits",
    ],
    exclusions: [
      "Travel Insurance",
      "Hard drinks and any other snacks",
      "Expenses of personal nature",
      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Okay Tadaa Byee Delhi!",
        content: [
          "We will leave from Delhi around 9 pm in a luxury tempo traveler/Car.",
          "Refreshments like water bottles and eatables will be provided at the start of the journey.",
          "Our first major stop will be for dinner(Own Expenses).",
          "Intro-session, Antakshri and Dumb charades during the journey.",
        ],
      },
      {
        day: "Day 2",
        title: "Chopta",
        content: [
          "We will reach Chopta in the morning and check-in our camps.",
          "Start your trek to Tungnath.",
          "Reach Tungnath & pay your respect at the highest abode of Lord Shiva.",
          "Start your journey to most astonished Chandrashila peak (if weather permits)",
          "Come back to the campsite by evening, dinner & sleep overnight.",
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Deoria Tal",
        content: [
          "Wake up and have breakfast.",
          "We will leave for Sari village.",
          "Start your trek to astonishing Deoria Tal.",
          "Reach Deoria Tal & enjoy the stunning view.",
          "Trek back to Sari village.",
          "Overnight stay, dinner and interactive sessions at Chopta.",
        ],
      },
      {
        day: "Day 4",
        title: "Local day",
        content: [
          "Open your eyes to beautiful mountains in front and relax your body.",
          "Enjoy your Breakfast.",
          "On this day we will relax, click many photos, explore new routes, go for nature walks and so much more.",
          "We will leave around 6 in the evening",
        ],
      },
      {
        day: "Day 5",
        title: "Reach Delhi",
        content: [
          "We'll reach Delhi the next day morning.",
          "Milte hai jald firr!!",
        ],
      },
    ],
  },
];

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("plan");
  const [current, setCurrent] = useState("cancellation");
  const trip = packages.find((p) => p.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  const tabClasses = (tab) =>
    `px-4 py-2 border rounded-t-md text-sm font-semibold transition whitespace-nowrap ${
      current === tab
        ? "bg-yellow-600 text-white"
        : "bg-white text-black border-none hover:bg-yellow-200"
    }`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trip) {
    return (
      <div className="p-8 text-center text-red-500 mt-25">Trip not found</div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto mt-25">
      <img
        src={trip.image}
        alt={trip.name}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-2">{trip.name}</h1>
        <p className="text-gray-700 mb-1">
          <strong>Location:</strong> {trip.location}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Duration:</strong> {trip.duration}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Package Cost
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="py-3 px-4 text-lg">Room Sharing</th>
                <th className="py-3 px-4 text-lg">Cost (per person)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 border-b">
                <td className="py-2 px-4">Quad Sharing</td>
                <td className="py-2 px-4">₹{trip.price.quad}/-</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-2 px-4">Triple Sharing</td>
                <td className="py-2 px-4">₹{trip.price.triple}/-</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4">Twin Sharing</td>
                <td className="py-2 px-4">₹{trip.price.twin}/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex space-x-4 my-6 border-b pb-2">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-4 py-2 rounded-t-md ${
            activeTab === "plan"
              ? "bg-yellow-600 text-white"
              : "bg-white text-black hover:bg-yellow-200"
          }`}
        >
          Day Wise Plan
        </button>
        <button
          onClick={() => setActiveTab("inclusions")}
          className={`px-4 py-2 rounded-t-md ${
            activeTab === "inclusions"
              ? "bg-yellow-600 text-white"
              : "bg-white text-black hover:bg-yellow-200"
          }`}
        >
          Inclusions & Excl.
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "plan" && trip.dayWisePlan && (
        <DayWisePlanAccordion itinerary={trip.dayWisePlan} />
      )}
      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 bg-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-600 hover:scale-105 transition-transform duration-300"
        >
          Enquire Now
        </button>
        <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
      {activeTab === "inclusions" && (
        <div className="bg-white p-4 rounded shadow-2xl">
          {trip.inclusions && (
            <>
              <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
                Inclusions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {trip.inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {trip.exclusions && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-2 border-b pb-1">
                Exclusions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {trip.exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      <div className="mt-10 p-4 bg-white rounded shadow-2xl">
        <h3 className="text-2xl font-semibold underline decoration-3 decoration-yellow-500 underline-offset-5 mb-4">
          Note:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            The age limit of our group departures is 16 to 34 years due to the
            power-packed itineraries that we provide to our travelers. We can
            customize trips for travelers beyond the mentioned age bracket.
          </li>
          <li>Early check-in at stay is subject to availability.</li>
          <li>
            Extra Mattresses will be provided for triple-sharing and
            quad-sharing.
          </li>
          <li>
            Travellers residing outside Delhi are suggested to book
            trains/flights reaching Delhi not later than 2 PM on the trip start
            date. Similarly, on the trip end date, book returning flights/trains
            leaving post 5 PM.
          </li>
          <li>
            Numerous factors such as weather, road conditions, participants'
            physical ability, etc. may cause itinerary changes. We reserve the
            right to change any schedule for safety, comfort and general
            well-being.
          </li>
        </ul>
      </div>

      <div className="w-full max-w-screen-sm mx-auto px-4 mt-10">
        <div className="p-4 bg-white rounded shadow-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b pb-2">
            <button
              className={tabClasses("cancellation")}
              onClick={() => setCurrent("cancellation")}
            >
              Cancellation Policy
            </button>
            <button
              className={tabClasses("terms")}
              onClick={() => setCurrent("terms")}
            >
              Terms and Conditions
            </button>
            <button
              className={tabClasses("things")}
              onClick={() => setCurrent("things")}
            >
              Things to Carry
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 bg-white break-words">
            {current === "cancellation" && (
              <>
                <p className="font-bold mb-2">
                  No Refund shall be made with respect to the initial booking
                  amount for any cancellations. However,
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    If cancellations are made 30 days before the start date of
                    the trip, 50% of the Advance amount will be charged as
                    cancellation fees.
                  </li>
                  <li>
                    If cancellations are made 15-30 days before the start date
                    of the trip, 75% of the Advance amount will be charged as
                    cancellation fees.
                  </li>
                  <li>
                    If cancellations are made within 0-15 days before the start
                    date of the trip, 100% of the Advance amount will be charged
                    as cancellation fees.
                  </li>
                  <li>
                    In the case of unforeseen weather conditions or government
                    restrictions, certain activities may be cancelled. No refund
                    will be provided for the same.
                  </li>
                </ul>
              </>
            )}

            {current === "terms" && (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Trip bookings are non-transferable once confirmed.</li>
                <li>Participants must follow safety protocols at all times.</li>
                <li>
                  All personal belongings are the responsibility of the
                  participant.
                </li>
                <li>
                  Disruptive behavior may lead to removal from the trip without
                  refund.
                </li>
              </ul>
            )}

            {current === "things" && (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Government-issued ID card</li>
                <li>Backpack with rain cover</li>
                <li>Warm clothes, gloves, and sturdy shoes</li>
                <li>Personal toiletries and towel</li>
                <li>Medicines, sunscreen, and water bottle</li>
              </ul>
            )}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 mt-6 w-full sm:w-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md transition duration-200"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default TripDetails;
