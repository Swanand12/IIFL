import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function Loan() {
  return (
    <>
      <Navbar />
      <div>
        <div className="h-60 md:h-[25.2rem]">
          <img
            src="../../Images/loan-img.png"
            alt="loan-img"
            className="size-full"
          />
        </div>
        <div className="flex items-center justify-center p-10 box-border">
          <img src="../../Images/loan-content-img.jpg" alt="loan-content" />
        </div>
      </div>
      <WhatsApp/>
      <Footer />
    </>
  );
}
