import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Equity() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:h-[25.2rem] animate-slide"
          style={{
            backgroundImage: 'url("../../Images/EQUITY.png")',
          }}
        ></div>
        <div className="flex items-center justify-center px-10 box-border">
          <img src="../../Images/equity-content-img.jpg" alt="equity" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Equity;
