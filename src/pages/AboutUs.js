import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-64px] md:h-[25.2rem]"
          style={{
            backgroundImage: 'url("../../Images/about-front.jpg")',
          }}
        >
          <div className="size-full bg-[#03022C] opacity-50"></div>
        </div>
        <div className="flex flex-col md:flex-row md:px-10 p-3 box-border text-[14px] font-sans">
          <div className="flex-1 flex items-start p-3">
            <div>
              <h2 className="mb-5 text-[20px] font-open md:pt-12 font-bold">
                Overview
              </h2>
              <p className="text-[#7A7A7A] leading-6">
                Living a corporate life was keeping us all too much busy and
                occupied with loads of unavoidable things coming on our way. Due
                to this heavy engagement, we could not find time to add real
                value to our client’s requirements at large.
                <br />
                After working for over a decade now, Piyush Kothari and Jay Shah
                decided to come together for providing clients a platform with
                world class infrastructure in the Financial Services domain.
                Waterfront Capital is the idea incubated for over 6 months
                before being available for clients in 2021.
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-3">
            <img
              src="../../Images/about-overview-img.jpg"
              alt="overview"
              className="w-[70%] h-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
