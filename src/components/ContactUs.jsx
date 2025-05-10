import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ContactUs() {
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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form Data Submitted:", formData);

      // Send to backend
      await axios.post(
        "https://travel-backend-4fzk.onrender.com/api/contact",
        formData
      ); // adjust URL if in production

      alert("Thank you for contacting us!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error(
        "Error submitting contact form:",
        error.response?.data || error.message
      );
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div id="contact" className="bg-yellow-100 py-20 px-6 sm:px-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 underline underline-offset-8 decoration-yellow-500">
        Get in Touch
      </h2>
      <p className="text-center text-gray-700 mb-12 text-lg">
        If you have any issues selecting the perfect package or need assistance,
        <br />
        feel free to reach out to us.
      </p>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xl font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border-2 border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xl font-semibold mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border-2 border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-xl font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xl font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={3}
              className="w-full p-3 border-2 border-yellow-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-yellow-400 px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
