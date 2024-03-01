import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Succession() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem]"
          style={{
            backgroundImage: 'url("../../Images/Succession-32.png")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#33025C] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Succession Planning
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 box-border">
          <img
            src="../../Images/succession_planning-content-img.jpg"
            alt="succession"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Succession;
