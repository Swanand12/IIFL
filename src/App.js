import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Overview from "./pages/AboutUs/Overview";
import OurTeam from "./pages/AboutUs/OurTeam";
import WhyWaterFront from "./pages/AboutUs/WhyWaterFront";
import Loan from "./pages/Loan";
import Equity from "./pages/Investment/Equity";
import FixedIncome from "./pages/Investment/FixedIncome";
import Insurance from "./pages/Investment/Insurance";
import RealEstate from "./pages/Investment/RealEstate";
import Residency from "./pages/Investment/Residency";
import Succession from "./pages/Investment/Succession";
import ContactUs from "./pages/ContactUs";
import WorkWithUs from "./pages/WorkWithUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
