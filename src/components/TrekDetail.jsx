import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DayWisePlanAccordion from "./DayWisePlanAccordition";

const packages = [
  {
    id: 1,
    name: "Triund Trek",
    location: "Dharamshala",
    duration: "2 days, 1 nights",
    price: 999,
    image: "/treks/Triund.jpeg",
    inclusions: [
      "Accommodation on sharing basis.",
      "All Meals (Veg), Including from Dinner on the 1st day to Breakfast on the 2nd Day.",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",

      "Anything not mentioned above",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Trek from Dharamshala to Triund | Descend to Leta Campsite",
        content: [
          "Welcome to Dharamshala! Meet your guide at the Bhagsu Naag Taxi stand to begin your trek. Get briefed about the trail and hydrate well as you begin your trek to Triund. On your route, see the BhagsuNag Waterfall before a stop-over at Shiva Cafe to enjoy the local flavours. Next, continue your trek via Katrani Dhar and enjoy breathtaking views of Kangra Valley and the Dhauladhar mountain range from the top. Later, trek back to the Leta campsite to enjoy a bonfire, followed by an overnight stay.",
          <span className="font-bold">
            Activity: Trek from Dharamshala to Triund <br />
            Trekking Distance: 9 km | Duration: 5-7 Hours | Elevation: 2850 Ft.
          </span>,
          "Begin your trek from the Manu Adventure India Office towards Triund, the Crown Jewel of Dharamshala.",
          "Meet the trek leader and get briefed about the popular trail.",
          "Start the trek towards the beautiful BhagsuNag Waterfall through the dense oak and rhododendron forests.",
          "Next, try local flavours as you stop at the Shiva Cafe, and from here the trail gets steeper.",
          "Continue your trek to Triund via Katrani Dhar, and upon reaching, enjoy the magical views of Kangra Valley and the Dhauladhar Mountain Range.",
          "Next, begin your descend to the Leta campsite for a bonfire with music and dinner, followed by an overnight camp stay.",
          "Check-in at Standard Camp",
          "Check-in: 5:00 pm | Check-out: 7:00am",
        ],
      },
      {
        day: "Day 2",
        title: "Downhill Trek from Triund to Mcleodganj",
        content: [
          "In the morning, admire the beautiful sunrise and witness the magical views of the surroundings. Post check-out, trek back to McLeodganj. On the way, spend time at the beautiful BhagsuNag Waterfall, visit the ancient BhagsuNag Temple, and visit the local Tibetan market. Later, upon reaching McLeodganj, enjoy the day at leisure and you can visit the Namgyal Monastery, Dal Lake and more.",
          <span className="font-bold">
            Activity: Downhill Trek to Mcleodganj <br />
            Trekking Distance: 9 km | Duration: 5-7 Hours | Elevation: 2297 Ft.
          </span>,
          "Post check-out, begin your descent towards McLeodganj, passing through picturesque oak forests, deodar forests, and witnessing the amazing views of Kangra Valley, Dharamshala valley and more.",
          "Visit the ancient BhagsuNag Temple, a popular pilgrimage site and witness the BhagsuNag waterfall adjacent to the temple.",
          "Before the day ends, explore the local Tibetan markets for Tibetan handicrafts, carpets, carvings, clothing, accessories and more",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kareri Lake Trek",
    location: "Dharamshala",
    duration: "2 days, 1 nights",
    price: 1499,
    image: "/treks/kareri.png",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg), Including from Dinner on the 1st day to Breakfast on the 2nd Day.",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",

      "All transportation from Mcleodganj to Kareri Village to Mcleodganj is not included in the package.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Dharamkot to Kareri Village and Trek to Kareri Lake",
        content: [
          "The meeting point for the trek is Himtrek campsite situated in Dharamkot, Mcleodganj.",
          "On day 1, you will be going from the campsite to the village of Kareri, the transportation for which is not included in the package.",
          "Trekkers will have to pay extra for the same. Your drive to the Kareri village will start after reaching Dharamkot and meeting the rest of the group.",
          "After reaching Kareri village, you will be starting the trek to Kareri Lake.",
          "Reach your campsite after absorbing majestic views the trek brings you.",
          "Spend the night at the campsite near the lake and relax properly after having dinner.",
        ],
      },
      {
        day: "Day 2",
        title: "Kareri Lake to Kareri Village and abck to Dharamkot",
        content: [
          "On day 2, After a filling breakfast, set out early in the morning to head out. Get ready to descend back to Kareri village.",
          "Follow the same trail to descend back. Descending will take less time than the climb.",
          "Once you reach Kareri village, vehicles would be there to drive you back to Mcleodganj. Again.",
          "This transportation cost is not included in the package and the trekkers would have to bear it on their own.",
          "Reaching Mcleodganj would mark the end of your trek.",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Thatharna Trek",
    location: "Dharamshala",
    duration: "2 days, 1 nights",
    price: 1599,
    image: "/treks/thatharna.jpeg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg), Including from Dinner on the 1st day to Breakfast on the 4th Day.",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Thatharana Trek | Khaniyara to Thatharana",
        content: [
          "Arrive at the Khaniyara Market before 10:00 AM to begin the Thatharana Trek.",
          "The trek passes through Kharota village which is at a duration of 1-2 hours from Khaiyara starting point",
          "This village is surrounded by lushy green fields and a proper valley view.",
          "Start your climb from here to Thatharna which is of around 3-4 hours.",
          "Have packed lunch in between the journey.",
          "Reach the top at around 3:30 PM and witness the glorifying views that this place offers.",
          "After enjoying the picturesque views reach at the campsite.",
          "Check into the camps at and enjoy some leisure time.",
          "Relish the amazing experience of bonfire along with dinner(around 8 PM) with some soothing music under the sky full of stars.",
          "Retire for the day and gather your strength for the next day.",
        ],
      },
      {
        day: "Day 2",
        title: "Thatharana to Thatharana | Departure",
        content: [
          "Wake up to a mesmerizing sunrise in the mountains and feast on a fulfilling breakfast.",
          "Explore the mystical views of the surroundings and interact with the local people.",
          "Enfold the soothing scenery of a herd sheep grazing in the green meadows as you descend down.",
          "Reach back to the start point(at around 12:30 PM)",
          "Thatharana Trek ends here with a bag full of memories to cherish for a lifetime.",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Indrahar Pass",
    location: "Dharamshala",
    duration: "4 days, 3 nights",
    price: 5499,
    image: "/treks/indrahar.jpeg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg), Including from Dinner on the 1st day to Breakfast on the 4th Day.",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Dharamkot to Triund Top Trek",
        content: [
          "The trek begins from McLeod Ganj, which is a small town situated in the Kangra district of Himachal Pradesh.",
          "The town is famous for its Tibetan culture and is the home of the exiled Tibetan spiritual leader, Dalai Lama.",
          "The trek starts early in the morning, and the first day involves a steep climb of 9 km to reach Triund.",
          "The trek takes around 4-5 hours to reach Triund, which is a beautiful meadow situated at an altitude of 2,875 metres.",
          "Trekkers can set up their camps at Triund and enjoy the sunset over the mountains.",
        ],
      },
      {
        day: "Day 2",
        title: "Trek from Triund Top to Laka Got",
        content: [
          "The second day of the trek involves a 6 km climb from Triund to Laka Got, passing through beautiful meadows and forests with breathtaking views of mountain ranges and valleys.",
          "The trek also features local wildlife like Himalayan langurs, wild goats, and musk deer. Laka Got, a picturesque camping site at 3,500 meters, is a popular destination for trekkers seeking mountain camping thrills.",
          "It offers stunning views of nearby peaks and allows campers to spend the night under the stars.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Trek form Laka to Indrahar Pass Via Lahesh Cave and back to Laka",
        content: [
          "The third day of the trek is the most challenging and exciting. Trekkers have to wake up early in the morning and start the trek to Indrahar Pass.",
          "which is situated at an altitude of 4,342 metres. The trail is steep and challenging, and it takes around 6-7 hours to reach the pass.",
          "After spending some time at the pass, trekkers start the descent towards Laka Got.",
          "The descent is equally challenging as the climb, and trekkers need to be careful while trekking down. Trekkers reach Laka Got by evening and set up their camps for the night.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek from Laka Got and back to Dharamkot",
        content: [
          "The fourth and the last day of the trek involves a moderate climb of 12 km from Laka Got to McLeod Ganj. The trail passes through the charming village of Chamba.",
          "which is known for its ancient temples and traditional handicrafts.",
          "Trekkers can take a break at the village and explore the surroundings.",
          "The trek takes around 5-6 hours to reach McLeodGanj, and trekkers can end their trek by the afternoon.",
          "The trek requires a moderate level of fitness and is suitable for both beginners and experienced trekkers.",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Minkiani Pass",
    location: "Dharamshala",
    duration: "4 days, 3 nights",
    price: 4499,
    image: "/treks/minkiani.jpeg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg), Including from Dinner on the 1st day to Breakfast on the 4th Day.",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "Transportation to Kareri Village.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Mcleodganj - Satobari - Ghera - Kareri Village",
        content: [
          "On day one, arrive in Mcleodganj and drive to Satobari village, a picturesque village with a well-defined trail.",
          "The trail ascends through lush green forests and meadows, offering panoramic views of the surrounding mountains. After 4-5 hours, reach Ghera, a picturesque village with accommodation options.",
          "The trek continues towards Kareri Village, passing traditional Himachali hamlets and stunning views of the Dhauladhar mountain range.",
        ],
      },
      {
        day: "Day 2",
        title: "Kareri Village to Kareri Lake",
        content: [
          "On day 2, the trek begins from Kareri Village, situated at an altitude of approximately 1,800 metres (5,905 feet). From the village.",
          "As you hike, you will come across gushing streams, waterfalls, and charming meadows, enhancing the scenic beauty of the trek.",
          "After hiking for about 5-6 hours, covering a distance of approximately 13 kilometres (8 miles), you will reach the serene Kareri Lake Located at an elevation of around 2,950 metres (9,678 feet).",
          "The glacial lake is nestled amidst the towering peaks of the Dhauladhar Range. Stay for the night there in your tents at Kareri Lake and refuel yourself for the next day.",
        ],
      },
      {
        day: "Day 3",
        title: "Kareri Lake to Minkiani Pass",
        content: [
          "The trek begins with a sunrise breakfast and follows a well-defined trail through rocky terrain. After 4-5 hours, you reach Kareri Base Camp, offering stunning views of the surrounding peaks.",
          "The trail becomes more challenging towards Minkiani Pass, with steep ascents and panoramic views. After 6-7 hours, you reach Minkiani Pass and descend towards Kareri Lake.",
          "The return journey follows the same route, offering stunning views of the surroundings. You spend the night at Kareri Lake.",
        ],
      },
      {
        day: "Day 4",
        title: "Kareri Lake - Kareri Village and back to Mcleodganj",
        content: [
          "Today marks the last day of your trek and the 4 days long adventure. Get ready to trek back to Kareri village following the same route.",
          "As you make your way down, you will be surrounded again by the breathtaking views of the Dhauladhar Range and the glistening Kareri River flowing alongside.",
          "The trek from Kareri Lake to Kareri Village usually takes around 4-5 hours, depending on your pace and the trail conditions.",
          "From here, a taxi will take you to Mcleodganj. Here comes the end of your trek, say adios to the fellows and this adventure and go back with millions of memories!",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Kheerganga Trek",
    location: "Kasol",
    duration: "2 days, 1 nights",
    price: 1100,
    image: "/treks/Kheerganga.jpg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg), 1 Breakfast and 1 Dinner",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Local sightseeing by walk",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Barshaini to Kheerganga",
        content: [
          "The starting point for the trek is Barshaini. It is 16 kms away from Kasol, while 12 kms away from Manikaran.",
          "Start your trek from Barshaini to Kheerganga, which is a moderate 12 km trek that takes around 5-6 hours.",
          "You will reach the trek's highest point after a 12 km stroll through pine forests. You'll reach Kheerganga once you've climbed the last hill, which leads to a stunning natural hot spring.",
        ],
      },
      {
        day: "Day 2",
        title: "Kheerganga to Barshaini",
        content: [
          "Wake up early to savour Kheerganga's natural hot springs and the stunning dawn over the mountains. After breakfast, start your descent back to Barshaini.",
          "The trek is downhill and takes around 4-5 hours. As the trek comes to a conclusion today, take in all the views once more with your eyes.",
          "The trek comes to an end when you arrive at Barshaini. Your two-day adventure comes to an end here.",
          "Reach Barshaini by afternoon and board your transport back to your next destination.",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Sar Pass",
    location: "Kasol",
    duration: "5 days, 4 nights",
    price: 5999,
    image: "/treks/sar.webp",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg)",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
      "Transportation ( Manali To Jobra Village, Chandratal To Manali)",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Kasol and Trek to Grahan village | 5-6 Hours Trek",
        content: [
          "Commence your journey in Kasol, nestled inside the Parvati Valley. Check-in at Himtrek Riverside Camps Kasol, the trek's starting point.",
          "Receive a briefing and packed lunch from the trek leader. Embark on the trail from Kasol to Grahan village, winding through dense forests. ",
          "Encounter cascading waterfalls and gurgling streams in a tranquil atmosphere. Face a steeper trail, trying out your patience.",
          "By past due afternoon, attain Grahan village, a picturesque hamlet nestled in the heart of the mountains.",
        ],
      },
      {
        day: "Day 2",
        title: "Grahan Village to Min Thatch | 4-5 Hours Trek",
        content: [
          "Traverse captivating pine and okay forests as you leave Grahan village.",
          "Ascend to better elevations at the Kasol trek. Encounter serene streams along the fascinating path.",
          "Arrive at the Min Thatch campsite in the afternoon. Pitch camp and unwind in the tranquil surroundings.",
          "Prepare for the next day after today's journey.",
        ],
      },
      {
        day: "Day 3",
        title: "Min Thatch to Nagaru | 3-4 Hours Trek",
        content: [
          "Embark on a challenging trek, ascending in the direction of Nagaru at 12,500 Ft. Navigate the steeper, probably snow-included path with a warning.",
          "Reach Nagaru by using past due afternoon underneath professional steering.",
          "Set up camp, surrounded by breathtaking mountain vistas.",
        ],
      },
      {
        day: "Day 4",
        title: "Nagaru to Biskeri Thatch via Sar Pass | 8-9 Hours Trek",
        content: [
          "This Himalayan trek begins at 2:00 AM with a climb to the Sar Pass summit at 13,800 feet.",
          "The journey involves crossing a snowfield and traversing crevasses, amidst the crisp mountain air.",
          "The summit offers breathtaking 360-degree vistas of the Pir Panjal and Great Himalayan degrees. The descent leads to the Biskeri Thatch meadow, where the terrain transitions from snow to wildflowers.",
          "By late afternoon, camp and share reports, enjoying the accomplishment and camaraderie.",
        ],
      },
      {
        day: "Day 5",
        title: "Biskeri Thach to Barsheni and Return to Kasol | 3-4 Hours Trek",
        content: [
          "The very last day of the Sar Pass Trek with a triumphant spirit. Enjoy breakfast and put together for the descent.",
          "Trek to Barsheni village, marking the completion of your adventure. Unwind on the foot of the mountains in Barsheni.",
          "Encounter streams and waterfalls, as serenity envelops you. Upon accomplishing Barsheni, you may have a while to discover the village.",
          "Browse neighborhood stores for souvenirs and connect to villagers, experiencing their heat hospitality. From Barsheni, you'll go back to the Kasol Basecamp, in which the trek ends.",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Hampta Pass",
    location: "Manali",
    duration: "5 days, 4 nights",
    price: 6499,
    image: "/treks/hampta.jpg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg)",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title:
          "Drive from Manali to Jobra Village (40min); Trek To Chikka | 3-4 Hours Trek |",
        content: [
          "Once you arrive at Manali, you'll be given a packed lunch, followed by an introduction to the superheroes of the trek, our guides!",
          "They'll brief you about the trek and you'll get the chance to clear your doubts and seek answers to your questions if any.",
          "The trek from Manali to Chikka is as divine as one could expect. Enjoy the constant switch between picturesque landscapes and explore the hidden beauty of Kullu Valley.",
          "The trek will take approximately 2-4 hours to cover. Once you reach the campsite in Chikka, you can relax in your camps and loosen up the tiredness of the day.",
        ],
      },
      {
        day: "Day 2",
        title: "Chika to Balu ka Ghera | 4-5 Hours Trek",
        content: [
          "Experience the colorful Chikka valley with a 9 km journey from Chikka to Balu Ka Gher, taking 4-5 hours.",
          "The trail offers scenic beauty with waterfalls, rocky river banks, and beautiful Himalayan peaks. Cross chilly rivers and soak in ice-cold water.",
          "After a challenging trail, arrive at Balu Ka Ghera's colorful campsite. Get into your camps and maybe take a nap before dinner.",
          "End the day with stargazing and an acoustic guitar-karaoke session to fuel up for another adventurous day.",
        ],
      },
      {
        day: "Day 3",
        title: "Balu ka Ghera to Sia and crossing Hampta Pass | 7-8 Hours Trek",
        content: [
          "The journey from Balu Ka Ghera to Shia Ghoru via Hampta Pass is a challenging yet enthusiastic trek that takes around 9 hours and covers a distance of 5 km.",
          "The climb to Hampta Pass is a moderately steep and flat descent towards Shia Ghoru.",
          "After a few hours of trekking, you finally climb Hampta Pass. However, you still have to trek down to Shea Ghoru, which is relatively easy and you will reach your destination without any issues.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Sia Ghoru to Chatru, Drive to Chandratal and return Chatru | 3-4 Hours Trek",
        content: [
          "Enjoy a delicious breakfast before starting your trek and driving for 2 to 2.5 hours.",
          "After reaching Chatru, drop your luggage in tents and head towards Chandrataal lake.",
          "This picturesque lake offers a variety of flora and fauna, including wildflowers and marmots.",
          "Return to Chatru and check into designated camps. Get well-rested after dinner before departing the landscapes the next day.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Drive from Chatru to Manali Via Atal Tunnel and back to Manali Base Camp",
        content: [
          "You'll be leaving at 8 am from Chatru after your breakfast, heading to the Manali base camp.",
          "Now is your time to relax and sit back for 5 long hours and enjoy the charismatic views of the mountains.",
          "The drive lets you paint the canvases of nature in your head! The further we go, the more beautiful it gets The views may be beautiful, but the roads here are bumpy and dusty, so buckle up real tight and enjoy the adventurous jeep ride.",
          "This is where your beautiful journey ends, sadly, but take a moment to soak in your whole experience and give a hurrah in the air!",
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Bhrigu Lake",
    location: "Manali",
    duration: "3 days, 2 nights",
    price: 4499,
    image: "/treks/Bhrigu.jpg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg)",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Drive from Manali to Kulang | Trek via Moridugh Route",
        content: [
          "Upon arrival at the campsite in Manali, Trekkers will be briefed at the campsite in Manali and drive to Kulang, the starting point of the trek.",
          "The trail ascends through dense forests and crosses Chor Nallah and Kohli Nallah.",
          "After reaching Moridugh, tents are assigned, and free time is provided for acclimatization and stargazing.",
          "Dinner is provided at night. followed by an overnight stay there.",
        ],
      },
      {
        day: "Day 2",
        title: "Moridugh | Bhrigu Lake Summit",
        content: [
          "Enjoy a sunrise and breakfast before starting a 3hr hike to Bhrigu Lake. Enjoy high plateaus and beautiful ridges above Kullu Valley.",
          "Enjoy lunch by the lake and take in Pir Pranjal and Dhauladhar hills. Be cautious, avoid littering, and swim in the lake.",
          "After lunch, camp at Moridugh campsite for the night.",
        ],
      },
      {
        day: "Day 3",
        title: "Descend Moridugh to Kuland - Manali",
        content: [
          "After breakfast, we'll hike directly to Kulang. The walk is simple because it descends gradually the entire way and can be completed in 3-4 hours to reach Kulang.",
          "Your experience comes to a close when a vehicle returns you to Manali from Kulang village. Head home with wonderful memories of this magnificent trekking adventure.",
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Kedarkantha",
    location: "Uttarakhand",
    duration: "5 days, 4 nights",
    price: 7499,
    image: "/treks/kedarkantha.jpg",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg)",
      "Well Qualified Trek Leader.",
      "Micro Spipkes and Gaiters as per snow conditions",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
    ],
    exclusions: [
      "Dehradun to Deharadun Transportation(est. 1500)",
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri | 8 hors drive",
        content: [
          "Begin your journey to Sankri village from Dehradun.",
          "After reaching Sankri village check-in at our Homestay, freshen up, and lose your journey's tiredness of the day.",
          "The trek leader and support staff will be introduced to you afterward, followed by the briefing session.",
          "Fill your stomachs with a mouth-watering dinner at the homestay and enjoy your overnight stay there.",
          "Reporting Point - ISBT, Dehradun or Prince Chowk Reporting Time - 6:00 AM to 9:00 AM",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Juda ka Talab | 3-4 Hors Trek",
        content: [
          "Say hello to the majestic morning views at 6.00 in the morning with your hot n fresh morning tea!",
          "A briefing session will be hosted in the morning by the Trek Leaders, followed by a lip-smacking breakfast.",
          "The adventurous journey starts here and you're supposed to leave for your trekking expedition after your breakfast.",
          "Reach the lake called 'Juda ka talab' which has many mythological stories revolving around it.",
          "Once you reach there and set out your camp for the night, you have the starlit sky to yourself for the night to gaze at!",
          "In the evening, dinner will be served at the Juda Ka Taal campsite, followed by an overnight stay there.",
        ],
      },
      {
        day: "Day 3",
        title: "Juda ka talab to Kedarkantha base Camp | 2-3 Hours Trek",
        content: [
          "The day begins with a fresh morning tea and breakfast, followed by a briefing by the trek leader before departing for Kedarkantha Base Camp.",
          "The journey takes 2-3 hours through snow-lined paths and green patches, offering stunning views of Himalayan peaks like Bandarpoonch, Kala Nag, and Ranglana.",
          "Lunch is served at the campsite, and the evening concludes with dinner and an overnight stay at Kedarkantha Base Camp.",
          "It's important to bring enough layers to stay warm, as the temperature may drop in the dark.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Kedarkantha Trek Base Camp to Kedarkantha Summit to Juda ka Talab | 6-8 Hours Trek",
        content: [
          "Our goal would be to trek to the summit of Kedarkantha peak and climb at a height of 1,250 meters.",
          "It will be an early start this day (around 2:00 AM at night) for our trek to Kedarkantha Summit.",
          "As we trek towards Kedarkantha Peak on the fourth day, we will experience intense wind and cold.",
          "We will witness the sunrise after reaching the summit and will get the chance to witness the beautiful panoramic view from the top!",
          "Within the next few hours, you will have to return to Kedarkantha Base Camp once again. As soon as you arrive at the campsite, you will be served a hot lunch to rejuvenate your energy and for your taste buds to be alive again!",
          "After lunch, you'll have to trek down to Juda ka Talab Campsite, where you'll have an overnight stay.",
        ],
      },
      {
        day: "Day 5",
        title: "Juda ka talab to Sankri and Drive to Dehradun | 8 Hours Drive",
        content: [
          "The day begins with a hearty breakfast and a trek towards Sankri Village from the Juda ka Talab Campsite.",
          "Unlike other paths to Sankri, this path to Sankri leads through pine trees and is mainly stone-lined. Once we arrive in Sankri, we will stop at our homestay for a quick break.",
          "You're welcome to order snacks for takeaway too. We will then proceed to Dehradun (we will reach Dehradun by late evening). This marks the end of Kedarkantha journey.",
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Kuari Pass",
    location: "Uttarakhand",
    duration: "5 days, 4 nights",
    price: 7999,
    image: "/treks/kuari.webp",
    inclusions: [
      "Accommodation on sharing basis.",
      "Meals (Veg)",
      "Well Qualified Trek Leader.",
      "Supporting Staff and cook.",
      "Basic Medical Kit.",
      "Accommodation on Tent stay",
      "Camping and Trekking Equipment (Tent, Sleeping bags etc).",
    ],
    exclusions: [
      "Anything which is not included in the above inclusion",
      "Porters or Mule to carry your personal Luggage",
      "Expenses of personal nature",
      "Personal Medication",
      "No travel insurance.",
    ],
    dayWisePlan: [
      {
        day: "Day 1",
        title: "Rishikesh to Joshimath",
        content: [
          "Depart from Rishikesh early in the morning.",
          "The drive begins on the Rishikesh-Haridwar Road, heading towards Haridwar, a town well-known for its religious significance.",
          "As you move ahead, the route will take you through the Shivalik Hills and along the banks of the Ganges River.",
          "The early hours provide a chance to witness the stunning, winding river valleys and the lush, green landscapes of the region.",
          "Continue towards Devprayag, where the Alaknanda and Bhagirathi rivers merge to form the Ganges.",
          "The views of the confluence are mesmerising and a perfect opportunity for photos.",
          "Continue the journey towards Joshimath, passing through Karnaprayag and Nandaprayag—towns known for their beautiful riverside views and temples.",
          "Arrive in Joshimath, a quaint town located at an altitude of 6,150 feet.",
          "Check into your accommodation and spend the night resting.",
        ],
      },
      {
        day: "Day 2",
        title: "Joshimath to Guling Top",
        content: [
          "After an early breakfast in Joshimath, depart for Dhak Village, the starting point of your trek.",
          "Begin your trek from Dhak Village, following a well-defined trail that gradually ascends through lush oak and rhododendron forests.",
          "Along the trail, you'll come across magnificent views of the Himalayan range, including glimpses of Nanda Devi and other surrounding peaks.",
          "As you get closer to Gulling Top, the trail opens up to beautiful meadows and views of the snow-capped peaks.",
          "The landscape here is rugged yet enchanting, with the changing terrain adding to the beauty of the trek.",
          "Reach Gulling Top, your campsite for the night.",
          "The evening will be perfect for stargazing as you witness the clear, star-filled skies high in the Himalayas.",
        ],
      },
      {
        day: "Day 3",
        title: "Guling Top to Khullara Top",
        content: [
          "Wake up early to catch the first light of dawn over the Himalayas.",
          "Start your trek from Gulling Top, heading towards Khullara Top, a slightly higher campsite.",
          "The trek begins with a gradual ascent through alpine meadows, dotted with colorful wildflowers.",
          "The trail remains easy to follow, winding through gentle inclines and stretches of grassy land, with tall trees occasionally providing shade.",
          "The crisp mountain air and peaceful atmosphere add to the charm of the trek.",
          "Arrive at Khullara Top, the campsite located on a ridge, surrounded by expansive meadows and offering some of the best sunrise and sunset views on the entire trek.",
          "Settle into your tents for the night, enjoying the tranquility and the cold mountain air.",
        ],
      },
      {
        day: "Day 4",
        title: "Khullara Top to Kuari Pass and back to Khullara",
        content: [
          "Wake up, enjoy a warm breakfast at the campsite and prepare for the day's trek, which will be the most challenging and rewarding part.",
          "Begin your trek towards Kuari Pass, a majestic high-altitude pass at an altitude of 12,516 feet.",
          "The trail begins with a steady ascent, offering increasingly spectacular views of the surrounding mountains.",
          "The terrain gradually transitions from meadows to rocky paths as you approach the high-altitude pass.",
          "As you ascend, you'll pass through a variety of terrains, including alpine meadows, rocky ridges, and barren slopes.",
          "The scenery is awe-inspiring, with panoramic views of the snow-covered peaks of Nanda Devi, Dronagiri, Trishul, and Chaukhamba.",
          "After approximately 4-5 hours of trekking, reach Kuari Pass, offering a spectacular 360-degree view of the surrounding peaks.",
          "Spend some time at the pass to take in the magnificent scenery, rest, and enjoy the sense of accomplishment.",
          "Later, begin your descent back towards Khullara Top. The return trek will take about 2-3 hours.",
          "Once you reach the campsite, unwind with a cup of tea and snacks as you enjoy the peaceful surroundings.",
          "Overnight at Khullara top.",
        ],
      },
      {
        day: "Day 5",
        title: "Khullara Top to Joshimath",
        content: [
          "Enjoy a hearty breakfast at the campsite in Khullara Top while taking in the final views of the surrounding Himalayan peaks.",
          "Begin your descent from Khullara Top towards Dhak Village, following the same trail that you took earlier in the trek.",
          "You will pass through the same picturesque meadows and oak forests.",
          "Reach Dhak Village, where the trek ends, and drive back to Joshimath.",
          "Arrive back in Joshimath.",
          "After checking into your accommodation, you can relax and freshen up after the long trek.",
          "Enjoy a warm dinner, sharing your experiences with fellow trekkers and celebrating the successful completion of the trek.",
        ],
      },
      {
        day: "Day ",
        title: "Joshimath to Rishikesh",
        content: [
          "After a relaxing breakfast in Joshimath, pack up your belongings and get ready for the journey back to Rishikesh.",
          "As you drive through the mountains, you'll pass along the Alaknanda River and witness the beautiful river valleys, terraced fields, and quaint villages.",
          "Enjoy the views of the Ganges River and the foothills of the Himalayas as you approach your destination.",
          "Upon arrival, you will have time to unwind, reflect on the incredible trek you just completed, and perhaps explore Rishikesh for the evening.",
        ],
      },
    ],
  },
];

const TrekDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("plan");
  const [current, setCurrent] = useState("cancellation");
  const trek = packages.find((p) => p.id === parseInt(id));

  const tabClasses = (tab) =>
    `px-4 py-2 border rounded-t-md text-sm font-semibold transition whitespace-nowrap ${
      current === tab
        ? "bg-yellow-600 text-white"
        : "bg-white text-black border-none hover:bg-yellow-200"
    }`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trek) {
    return (
      <div className="p-8 text-center text-red-500 mt-25">trip not found</div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto mt-25">
      <img
        src={trek.image}
        alt={trek.name}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-2">{trek.name}</h1>
        <p className="text-gray-700 mb-1">
          <strong>Location:</strong> {trek.location}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Duration:</strong> {trek.duration}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Price:</strong> {trek.price}
        </p>
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
      {activeTab === "plan" && trek.dayWisePlan && (
        <DayWisePlanAccordion itinerary={trek.dayWisePlan} />
      )}
      <div className="flex justify-center">
        <button className="mt-5 bg-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-600 hover:scale-105 transition-transform duration-300">
          Book Now
        </button>
      </div>
      {activeTab === "inclusions" && (
        <div className="bg-white p-4 rounded shadow-2xl">
          {trek.inclusions && (
            <>
              <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
                Inclusions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {trek.inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {trek.exclusions && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-2 border-b pb-1">
                Exclusions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {trek.exclusions.map((item, index) => (
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

export default TrekDetails;
