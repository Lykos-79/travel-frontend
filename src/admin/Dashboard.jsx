// src/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTrips = async () => {
      const API = import.meta.env.VITE_API_URL;
      try {
        const res = await axios.get(`${API}/api/trips`, {
          headers: { Authorization: token },
        });
        setTrips(res.data);
      } catch (err) {
        console.error(err);
        setMessage("❌ Failed to fetch trips");
      }
    };

    fetchTrips();
  }, [token]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this trip?"
    );
    if (!confirm) return;

    const API = import.meta.env.VITE_API_URL;
    try {
      await axios.delete(`${API}/api/trips/${id}`, {
        headers: { Authorization: token },
      });
      setTrips(trips.filter((trip) => trip._id !== id));
      setMessage("✅ Trip deleted successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to delete trip");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const groupedTrips = {
    trip: trips.filter((t) => t.category === "trip"),
    trek: trips.filter((t) => t.category === "trek"),
    honeymoon: trips.filter((t) => t.category === "honeymoon"),
    international: trips.filter((t) => t.category === "international"),
  };

  return (
    <div className="pt-25 px-4 max-w-7xl mx-auto">
      {message && (
        <p className="mb-4 text-center text-sm text-red-500">{message}</p>
      )}

      {/* Top Bar: Title + Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex gap-3">
          <Link
            to="/admin/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
          >
            ➕ Add Trip
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Trip Cards */}
      {Object.entries(groupedTrips).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 capitalize border-b pb-2 text-blue-700">
            {category} Packages ({items.length})
          </h2>

          {items.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No {category} packages found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((trip) => (
                <div
                  key={trip._id}
                  className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition overflow-hidden"
                >
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {trip.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {trip.priceOnRequest ? (
                        "Price on Request"
                      ) : trip.price ? (
                        `₹ ${trip.price}`
                      ) : (
                        <>
                          {trip.multiPrice?.quad && (
                            <span>Quad: ₹{trip.multiPrice.quad} </span>
                          )}
                          {trip.multiPrice?.triple && (
                            <span> | Triple: ₹{trip.multiPrice.triple} </span>
                          )}
                          {trip.multiPrice?.twin && (
                            <span> | Twin: ₹{trip.multiPrice.twin}</span>
                          )}
                        </>
                      )}
                    </p>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={() => navigate(`/admin/edit/${trip._id}`)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 text-sm rounded-md transition"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(trip._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 text-sm rounded-md transition"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
