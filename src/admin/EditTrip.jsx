import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tripData, setTripData] = useState(null);
  const [message, setMessage] = useState("");
  const [newDayPlan, setNewDayPlan] = useState({
    day: "",
    title: "",
    content: "",
  });

  // 🟡 Fetch existing trip data
  useEffect(() => {
    const fetchTrip = async () => {
      const API = import.meta.env.VITE_API_URL;
      try {
        const res = await axios.get(`${API}/api/trips/${id}`);
        const trip = res.data;

        setTripData({
          ...trip,
          price: trip.price || "",
          multiPrice: trip.multiPrice || { quad: "", triple: "", twin: "" },
          inclusions: trip.inclusions?.join("\n") || "",
          exclusions: trip.exclusions?.join("\n") || "",
        });
      } catch (err) {
        console.error(err);
        setMessage("❌ Failed to fetch trip details");
      }
    };

    fetchTrip();
  }, [id]);

  // 🟡 Handle form field changes
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name.startsWith("multiPrice.")) {
      const key = name.split(".")[1];
      setTripData((prev) => ({
        ...prev,
        multiPrice: { ...prev.multiPrice, [key]: value },
      }));
    } else if (name === "priceOnRequest") {
      setTripData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setTripData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🟡 Update trip
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const updatedPayload = {
      ...tripData,
      price: Number(tripData.price),
      multiPrice: {
        quad: Number(tripData.multiPrice.quad),
        triple: Number(tripData.multiPrice.triple),
        twin: Number(tripData.multiPrice.twin),
      },
      inclusions: tripData.inclusions.split("\n").map((i) => i.trim()),
      exclusions: tripData.exclusions.split("\n").map((e) => e.trim()),
    };

    const API = import.meta.env.VITE_API_URL;
    try {
      await axios.put(`${API}/api/trips/${id}`, updatedPayload, {
        headers: {
          Authorization: token,
        },
      });

      setMessage("✅ Trip updated successfully!");
      setTimeout(() => navigate("/admin/dashboard"), 1000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update trip");
    }
  };

  // 🟡 Add new day plan
  const handleDayPlanChange = (e) => {
    const { name, value } = e.target;
    setNewDayPlan((prev) => ({ ...prev, [name]: value }));
  };

  const addDayPlan = () => {
    const formattedPlan = {
      ...newDayPlan,
      content: newDayPlan.content.split("\n").map((line) => line.trim()),
    };

    setTripData((prev) => ({
      ...prev,
      dayWisePlan: [...prev.dayWisePlan, formattedPlan],
    }));

    setNewDayPlan({ day: "", title: "", content: "" });
  };

  if (!tripData)
    return <p className="text-center mt-6">Loading trip details...</p>;

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Trip</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow p-6 rounded-lg"
      >
        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={tripData.name}
            onChange={handleChange}
            placeholder="Trip Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            name="location"
            value={tripData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            name="duration"
            value={tripData.duration}
            onChange={handleChange}
            placeholder="Duration"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            name="price"
            type="number"
            value={tripData.price}
            onChange={handleChange}
            placeholder="Base Price"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Multi Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            name="multiPrice.quad"
            type="number"
            value={tripData.multiPrice.quad}
            onChange={handleChange}
            placeholder="Quad Price"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="multiPrice.triple"
            type="number"
            value={tripData.multiPrice.triple}
            onChange={handleChange}
            placeholder="Triple Price"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="multiPrice.twin"
            type="number"
            value={tripData.multiPrice.twin}
            onChange={handleChange}
            placeholder="Twin Price"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <input
          name="image"
          value={tripData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="category"
          value={tripData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Price on Request */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priceOnRequest"
            checked={tripData.priceOnRequest}
            onChange={handleChange}
          />
          <span className="text-sm">Price on Request</span>
        </label>

        {/* Inclusion & Exclusion */}
        <textarea
          name="inclusions"
          value={tripData.inclusions}
          onChange={handleChange}
          placeholder="Inclusions (one per line)"
          className="w-full px-4 py-2 border rounded-md"
          rows={4}
        />
        <textarea
          name="exclusions"
          value={tripData.exclusions}
          onChange={handleChange}
          placeholder="Exclusions (one per line)"
          className="w-full px-4 py-2 border rounded-md"
          rows={4}
        />

        {/* Day-wise Plan Section */}
        <div className="bg-gray-50 border p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Add Day-wise Plan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              name="day"
              value={newDayPlan.day}
              onChange={handleDayPlanChange}
              placeholder="Day (e.g., Day 1)"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              name="title"
              value={newDayPlan.title}
              onChange={handleDayPlanChange}
              placeholder="Title"
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              name="content"
              value={newDayPlan.content}
              onChange={handleDayPlanChange}
              placeholder="Content (one point per line)"
              className="w-full px-3 py-2 border rounded"
              rows={2}
            />
          </div>

          <button
            type="button"
            onClick={addDayPlan}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            ➕ Add Day Plan
          </button>

          {/* Show Existing Plans */}
          {tripData.dayWisePlan?.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
              {tripData.dayWisePlan.map((plan, index) => (
                <li key={index}>
                  <strong>{plan.day}</strong>: {plan.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full text-lg font-semibold"
        >
          🔄 Update Trip
        </button>
      </form>
    </div>
  );
};

export default EditTrip;
