export default function ContactUs() {
  return (
    <>
      <div class="contact font-sans w-full flex md:flex-row flex-col list-none m-5  my-[5rem]  ">
        <div class="contact_left w-full md:w-[65%] ">
          <iframe
            class="my-4 w-[95%] md:w-[80%] "
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29045.12486246187!2d72.78981477128877!3d18.970527822656653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWaterfront%20Capital%20Services%20LLP%2010%2C%20Mehta%20Bhavan%2C%20Ground%20Floor%2C%20Behind%20Saifee%20Hospital%2C%20Charni%20Road%2C%20Mumbai%20400%20004%2C%20India!5e1!3m2!1sen!2sin!4v1695316270623!5m2!1sen!2sin"
            width="600"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="contact_submit w-full flex flex-col">
            <input
              class=" md:w-[70%] placeholder-black border border-black text-lg p-3 rounded-[30px] my-4"
              type="text"
              placeholder="Name"
            />
            <input
              class=" md:w-[70%] placeholder-black border border-black text-lg p-3 rounded-[30px] my-4"
              type="email"
              placeholder="Email"
            />
            <input
              class="md:w-[70%] placeholder-black border border-black text-lg p-3 rounded-[30px] my-4"
              type="text"
              placeholder="Phone No."
            />
            <textarea
              class="md:w-[70%] h-[150px] placeholder-black border border-black text-lg p-3 rounded-[30px] my-4"
              type="text"
              placeholder="Message"
            />
            <button
              class="border  border-black bg-[#1F19A8] text-[#ffffff] px-2 py-2 my-4 rounded-[30px] w-[140px]"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div class="contact_right w-full md:w-[35%] my-4 ">
          <div class="f_right w-full m-4  md:my-4">
            <h4 class="font-medium text-xl pb-7">CONTACT US</h4>
            <div class="f_right_contact-1 ">
              <h4 class="text-xl font-medium pb-3">Jay Shah</h4>
              <li>
                <i class="fa fa-phone fa-flip-horizontal mr-2 text-[#1F19A8] "></i>
                <span class="pb-3 text-lg">+91 99875 42828</span>
              </li>
              <li>
                <i class="fa fa-envelope mr-2 text-[#1F19A8]"></i>
                <span class="pb-3 text-lg">jay@waterfrontcapital.in</span>
              </li>
            </div>
            <div class="f_right_contact-2 pt-5">
              <h4 class="text-xl font-medium pb-3">Piyush Kothari</h4>
              <li>
                <i class="fa fa-phone fa-flip-horizontal mr-2 text-[#1F19A8]"></i>
                <span class="pb-3 text-lg">+91 89760 21948</span>
              </li>
              <li>
                <i class="fa fa-envelope mr-2 text-[#1F19A8]"></i>
                <span class="pb-3 text-lg">piyush@waterfrontcapital.in</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
