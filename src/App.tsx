import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UnitPage from "./UnitPage";
import StaffPage from "./StaffPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unit/:slug" element={<UnitPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </Router>
  );
};

export default App;
