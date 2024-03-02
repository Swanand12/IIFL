import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Residency() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/Residency-31.png")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#232323] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Residency Programs
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 box-border">
          <img
            src="../../Images/residency_programs-content-img.jpg"
            alt="residency"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Residency;
