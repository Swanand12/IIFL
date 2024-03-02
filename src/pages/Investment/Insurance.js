import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsApp from "../../components/WhatsApp";

function Insurance() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-5px] md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/insurance-form.png")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#464684] bg-opacity-50">
            <div className="text-white text-[60px] font-semibold font-open">
              Insurance
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 box-border">
          <img src="../../Images/insurance_content-img.jpg" alt="insurance" />
        </div>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}

export default Insurance;
