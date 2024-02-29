import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsApp";
import Footer from "../components/Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="flex mb-[5rem] justify-center w-[100%]">
        <div class="contact font-sans text-[14px] flex md:flex-row flex-col list-none w-[100%] md:w-[81%] ">
          <div class="contact_left m-2 md:w-[65%]">
            <iframe
              class="w-[100%] "
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29045.12486246187!2d72.78981477128877!3d18.970527822656653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWaterfront%20Capital%20Services%20LLP%2010%2C%20Mehta%20Bhavan%2C%20Ground%20Floor%2C%20Behind%20Saifee%20Hospital%2C%20Charni%20Road%2C%20Mumbai%20400%20004%2C%20India!5e1!3m2!1sen!2sin!4v1695316270623!5m2!1sen!2sin"
              width="600"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="contact_submit flex flex-col mx-5 md:mx-0">
              <input
                class="  placeholder-black border border-black  p-2 rounded-[30px] mt-5"
                type="text"
                placeholder="Name"
              />
              <input
                class="  placeholder-black border border-black  p-2 rounded-[30px] mt-5"
                type="email"
                placeholder="Email"
              />
              <input
                class=" placeholder-black border border-black  p-2 rounded-[30px] mt-5"
                type="text"
                placeholder="Phone No."
              />
              <textarea
                class=" h-[150px] placeholder-black border border-black  p-2 rounded-[20px] mt-5"
                type="text"
                placeholder="Message"
              />
              <button
                class="bg-[#1F19A8] text-[#ffffff] py-[6px] mt-6 rounded-[30px] w-[120px]"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div class="contact_right ml-10 mt-10  md:w-[35%] ">
            <div class="f_right w-[100%] ">
              <h4 class="text-lg pb-7">CONTACT US</h4>
              <div class="f_right_contact-1 ">
                <h4 class="text-lg pb-3">Jay Shah</h4>
                <li>
                  <LocalPhoneIcon
                    style={{
                      marginRight: "5px",
                      fontSize: "18px",
                      color: "#1F19A8",
                    }}
                  />
                  <span class="pb-3 ">+91 99875 42828</span>
                </li>
                <li>
                  <EmailIcon
                    style={{
                      marginRight: "5px",
                      fontSize: "18px",
                      color: "#1F19A8",
                    }}
                  />
                  <span class="pb-3 ">jay@waterfrontcapital.in</span>
                </li>
              </div>
              <div class="f_right_contact-2 pt-5">
                <h4 class="text-lg  pb-3">Piyush Kothari</h4>
                <li>
                  <LocalPhoneIcon
                    style={{
                      marginRight: "5px",
                      fontSize: "18px",
                      color: "#1F19A8",
                    }}
                  />
                  <span class="pb-3 ">+91 89760 21948</span>
                </li>
                <li>
                  <EmailIcon
                    style={{
                      marginRight: "5px",
                      fontSize: "18px",
                      color: "#1F19A8",
                    }}
                  />
                  <span class="pb-3 ">piyush@waterfrontcapital.in</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}
