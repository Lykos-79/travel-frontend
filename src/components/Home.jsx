import React, { useState } from "react";
import Gallery from "./Gallery";
import About from "./About";
import InternationalTrips from "./InternationalTrips";
import Reviews from "./Reviews";
import Treks from "./Treks";
import Trips from "./Trips";
import ContactUs from "./ContactUs";
import HoneyMoonPackages from "./HoneymoonPackages";
import CallbackModal from "./CallbackModal";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Helmet>
        <title>Explore Treks, Trips & Honeymoon Packages | MyTravelSite</title>
        <meta
          name="description"
          content="Discover your perfect getaway! Book treks, weekend trips, international holidays, and honeymoon packages with detailed plans and custom pricing."
        />
        <meta
          property="og:title"
          content="Explore Treks, Trips & Honeymoon Packages | MyTravelSite"
        />
        <meta
          property="og:description"
          content="Adventure or relaxation – we offer customizable treks, trips, and holidays for every traveler."
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 mt-40">
            Explore The World <br /> with{" "}
            <span className="text-yellow-400">Hum Nikle Gaddi Leke</span>
          </h1>
          <p className="max-w-2xl">
            We love to introduced ourselves as young, passionate travellers and
            explores. <br />
            We organise group trips across all over <br />
            India and Internationally.
          </p>
          <button
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-yellow-500 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <span>📞</span>
            <span>Request a callback</span>
          </button>
          <CallbackModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
      <About />
      <Trips />
      <HoneyMoonPackages />
      <Treks />
      <InternationalTrips />
      <Reviews />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}
