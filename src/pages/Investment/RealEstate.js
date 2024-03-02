import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsApp from "../../components/WhatsApp";

export default function RealEstate() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/RealEstate-29.png")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#292929] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Real Estate
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 box-border">
          <img
            src="../../Images/real_estate-content-img.jpg"
            alt="realEstate"
          />
        </div>
      </div>
      <WhatsApp/>
      <Footer />
    </>
  );
}
