import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UnitPage from "./UnitPage";
import StaffPage from "./StaffPage";
import GalleryAndSales from "./GalleryAndSales";
import ArtistDashboard from "./ArtistDashboard";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unit/:slug" element={<UnitPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/gallery" element={<GalleryAndSales />} />
        <Route path="/artist" element={<ArtistDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
