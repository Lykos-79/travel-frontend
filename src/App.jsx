import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "react-medium-image-zoom/dist/styles.css";
import TripDetails from "./components/TripDetails";
import TermsAndConditions from "./components/TermsAndConditions";
import TrekDetails from "./components/TrekDetail";
import GalleryPage from "./components/GalleryPage";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/trek/:id" element={<TrekDetails />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/full-gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
