import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "react-medium-image-zoom/dist/styles.css";
import TripDetails from "./components/TripDetails";
import TermsAndConditions from "./components/TermsAndConditions";
import TrekDetails from "./components/TrekDetail";
import GalleryPage from "./components/GalleryPage";
import Login from "./admin/login";
import Dashboard from "./admin/Dashboard";
import EditTrip from "./admin/EditTrip";
import AddTrip from "./admin/AddTrip";
import ProtectedRoute from "./admin/ProtectedRoute";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/treks/:id" element={<TrekDetails />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/full-gallery" element={<GalleryPage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <ProtectedRoute>
              <AddTrip />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute>
              <EditTrip />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
