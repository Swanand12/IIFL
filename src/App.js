import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import WorkWithUs from "./pages/WorkWithUs";
import ImageSlider from "./components/ImageSlider/ImageSlider";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/work-with-us" element={<WorkWithUs/>} />
        <Route path="image-slider" element={<ImageSlider/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
