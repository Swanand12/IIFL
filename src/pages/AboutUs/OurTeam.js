import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function OurTeam() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="h-60 bg-cover md:bg-grad bg-center md:bg-[center_-75px] md:h-[25.2rem]"
          style={{
            backgroundImage: 'url("../../Images/about-front.jpg")',
          }}
        >
          <div className="flex items-center justify-center size-full bg-[#060608] bg-opacity-50">
            <div className="text-white text-[39px] font-semibold font-open con">
              Our Team
            </div>
          </div>
        </div>
        <div className="flex flex-wrap my-14 px-8">
          <div className="relative items-center flex flex-col box-border w-[100%] md:w-[50%] lg:w-[25%]">
            <div className="w-[70%]">
              <img
                src="../../Images/WhatsApp_Image1.png"
                alt="client"
                className="rounded-2xl h-auto w-full"
              />
            </div>
            <div className="flex items-center text-center flex-col font-open text-[14px] p-3">
              <h3 className="text-[20px] uppercase font-bold py-1">Jay Shah</h3>
              <h4 className="text-[#4329B5] uppercase pt-1 pb-3">
                Founder & Managing Partner
              </h4>
              <p className="pb-5">
                Jay has over 12 years of experience across a range of business
                including Wealth Management, Private Banking, Equity Research,
                Lending, Real Estate Advisory and Investment based Immigration
                Visas. Post-Graduate in Finance from FLAME, Pune. Over his
                corporate tenure, he has worked across various organisations
                like JM Financial, HDFC Bank, Citi Bank & Centrum. He loves
                travelling, playing badminton and swimming.
              </p>
            </div>
          </div>
          <div className="relative items-center flex flex-col box-border w-[100%] md:w-[50%] lg:w-[25%]">
            <div className="w-[70%]">
              <img
                src="../../Images/WhatsApp_Image2.png"
                alt="client"
                className="rounded-2xl h-auto w-full"
              />
            </div>
            <div className="flex items-center text-center flex-col font-open text-[14px] p-3">
              <h3 className="text-[20px] uppercase font-bold py-1">
                Piyush Kothari
              </h3>
              <h4 className="text-[#4329B5] uppercase pt-1 pb-3">
                Founder & Managing Partner
              </h4>
              <p className="pb-5">
                Piyush is a seasoned Banker with a successful global career of
                over 10 years. Having spent times with ICICI Bank, HDFC Bank &
                Centrum with in-depth understanding for the business of Wealth
                Management, Capital markets, Investment Banking, Private Equity
                & Lending. He manages clients across geographies for simple to
                complex Financial Services requirements. His investment goal is
                to retire rich, own a beach home & produce a film.
              </p>
            </div>
          </div>
          <div className="relative items-center flex flex-col box-border w-[100%] md:w-[50%] lg:w-[25%]">
            <div className="w-[70%]">
              <img
                src="../../Images/WhatsApp-Image3.jpeg"
                alt="client"
                className="rounded-2xl h-auto w-full"
              />
            </div>
            <div className="flex items-center text-center flex-col font-open text-[14px] p-3">
              <h3 className="text-[20px] uppercase font-bold py-1">
                Shefali Jain
              </h3>
              <h4 className="text-[#4329B5] uppercase pt-1 pb-3">
                Senior Advisor – Legal & Succession Planning
              </h4>
              <p className="pb-5">
                Shefali has an extensive experience of over 8 years in the field
                of Corporate law (Litigation & Non-Litigation). Her prominent
                assignments include work in the fields of Private Equity &
                Venture Capital Funds, Indian Startup Advisory, Succession
                Planning and complex Trust formations for clients in the Western
                world.
              </p>
            </div>
          </div>
          <div className="relative items-center flex flex-col box-border w-[100%] md:w-[50%] lg:w-[25%]">
            <div className="w-[70%] h-auto">
              <img
                src="../../Images/WhatsApp-Image.jpeg"
                alt="client"
                className="rounded-2xl h-auto w-full"
              />
            </div>
            <div className="flex items-center text-center flex-col font-open text-[14px] p-3">
              <h3 className="text-[20px] uppercase font-bold py-1">
                Anand Lunkar
              </h3>
              <h4 className="text-[#4329B5] uppercase pt-1 pb-3">
                Senior Advisor – Taxation
              </h4>
              <p className="pb-5">
                By profession, Anand is a veteran Chartered Accountant with deep
                knowledge and operational experience in key regulatory areas of
                taxation & auditing. With an established track record of
                delivering values for more than a decade now, Anand brings along
                great experience to advice clients on complex taxation matters
                at Waterfront Capital.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurTeam;
