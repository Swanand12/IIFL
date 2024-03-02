import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsApp from "../../components/WhatsApp";

function Equity() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover  bg-center md:h-[25.2rem]"
          style={{
            backgroundImage: 'url("../../Images/EQUITY.png")',
          }}
        ></div>
        <div className="flex items-center justify-center px-10 box-border">
          <img src="../../Images/equity-content-img.jpg" alt="equity" />
        </div>
      </div>
      <WhatsApp/>
      <Footer />
    </>
  );
}

export default Equity;
