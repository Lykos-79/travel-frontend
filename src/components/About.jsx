import Counter from "./Counter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
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

  return (
    <>
      <Helmet>
        <title>About Us | MyTravelSite</title>
        <meta
          name="description"
          content="Learn more about our team, mission, and passion for curating unforgettable travel experiences across India and abroad."
        />
        <meta property="og:title" content="About Us | MyTravelSite" />
        <meta
          property="og:description"
          content="Trusted travel experts offering tailored packages with attention to every detail."
        />
        <meta property="og:url" content="https://yourdomain.com/about-us" />
        <link rel="canonical" href="https://yourdomain.com/about-us" />
      </Helmet>

      <div id="about" className="bg-yellow-100 py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="Manali.jpg"
              alt="About Hum Nikle Gaddi Leke"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-[0_4px_30px_rgba(255,255,255,0.5)]"
            />
          </div>

          {/* Right Side - Text and Counters */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Us</h2>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-yellow-500">Hum Nikle Gaddi Leke</span>
            </h2>
            <p className="text-black leading-relaxed mb-6">
              Jindagi Ek Safar Hai, Nikloge Tabhi Pauchoge! <br />
              <br />
              At Hum Nikle Gaddi Leke, we believe that every journey is a story
              waiting to be written. Whether you dream of exploring breathtaking
              landscapes, indulging in luxurious honeymoon escapes, bonding on
              unforgettable group adventures, or planning seamless corporate
              retreats—we make it happen.
              <br />
              <br />
              From the snow-capped peaks of Himachal to the pristine beaches of
              the Maldives, from vibrant Indian cities to mesmerizing
              international destinations, we specialize in crafting personalized
              itineraries tailored to your desires.
              <br />
              <br />
              Let's hit the road together—Hum Nikle Gaddi Leke!
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Counter target={150} duration={2000} label="Trips Done" />
              <Counter target={1200} duration={2500} label="Happy Customers" />
              <Counter target={25} duration={1500} label="Visited Places" />
              <Counter target={10} duration={1200} label="Team Members" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
