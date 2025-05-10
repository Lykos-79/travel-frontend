import React, { useEffect, useState } from "react";
import axios from "axios";

const CallbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    people: 1,
    remarks: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post(
        "https://travel-backend-4fzk.onrender.com/api/callback",
        formData
      );
      setMessage("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        people: 1,
        remarks: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600/50 flex justify-center items-center z-50 pt-15">
      <div className="bg-white text-black w-[80%] max-w-md rounded-lg p-6 overflow-y-auto max-h-[80vh] relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-black hover:scale-120 transition-transform duration-300"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Request a Callback</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          {[
            "name",
            "email",
            "phone",
            "destination",
            "date",
            "people",
            "remarks",
          ].map((field) => (
            <div key={field} className="mt-4">
              <label
                htmlFor={field}
                className="text-1xl font-medium capitalize"
              >
                {field === "people"
                  ? "Number of People"
                  : field === "remarks"
                  ? "Remarks"
                  : field.replace(/([A-Z])/g, " $1")}
              </label>
              {field === "remarks" ? (
                <textarea
                  id={field}
                  placeholder="Enter any remarks"
                  value={formData[field]}
                  onChange={handleChange}
                  className="p-2 border rounded resize-none w-full"
                />
              ) : (
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "date"
                      ? "date"
                      : field === "phone"
                      ? "tel"
                      : field === "people"
                      ? "number"
                      : "text"
                  }
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="p-2 border rounded w-full"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 rounded font-semibold mt-10"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Enquire"}
          </button>

          {message && (
            <p className="text-center text-sm mt-4 text-green-600 font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CallbackModal;
