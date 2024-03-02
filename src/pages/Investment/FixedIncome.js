import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsApp from "../../components/WhatsApp";

function FixedIncome() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/FixedIncome-1.png")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#232323] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Fixed Income
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 box-border">
          <img
            src="../../Images/fixed_income-content-img.jpg"
            alt="fixedIncome"
          />
        </div>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}

export default FixedIncome;
