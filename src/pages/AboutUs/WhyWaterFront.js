import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function WhyWaterFront() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="z-0 h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/Professional-Service.jpg")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#060608] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Why WaterFront?
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 box-border">
          <img src="../../Images/81.jpg" alt="81" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WhyWaterFront;
