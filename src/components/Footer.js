export default function Footer() {
  return (
    <footer class="footer  w-[100%] font-sans pb-3 px-10 bg-blue-300 ">
      <div class=" w-full mb-5 list-none flex flex-col md:flex-row justify-between ">
        {/* <div className="f_left">
        <h4>HEAD OFFICE</h4>
        <div className="f_left_cont">
          <li>Waterfront Capital Services LLP</li>
          <li>10, Mehta Bhavan, Ground Floor,</li>
          <li>Behind Saifee Hospital, Charni Road,</li>
          <li>Mumbai 400 004, India</li>
        </div>
        <div className="f_left_contact">
          <li>
            <i className="fa fa-phone"></i>
            <span>+91 22 4969 4083</span>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span>support@waterfrontcapital.in</span>
          </li>
        </div>
        <div className="f_left_contact_links">
          <a href="www.facebook.com">
            <div className="f_facebook">
              
              
            </div>
          </a>
          <a href="www.instagram.com">
            <div className="f_instagram">
            
            </div>
          </a>
          <a href="www.twitter.com">
            <div className="f_twitter">
              <i className="fa fa-twitter"></i>
            </div>
          </a>
          <a href="www.linkedin.com">
            <div className="f_linkedin">
              <i className="fa fa-linkedin"></i>
            </div>
          </a>
        </div>
      </div> */}
        <div class="f_mid md:m-4 mt-2 mb-8 w-full mr-20 md:w-1/2 ">
          <h4 class="font-medium text-xl pb-5 ml-4">ASSOCIATION</h4>
          <div class="f_mid_img flex flex-col md:flex-row">
            <div class="f_mid_ass-img-col1 w-full mr-4 md:w-1/2 ">
              <img
                class="w-full h-16 md:w-80 md:h-14 m-4"
                src="\images\ass-img1.jpeg"
                alt="ass-img1"
              ></img>
              <img
                class="w-full h-16 md:w-80 md:h-14 m-4"
                src="\images\ass-img2.jpeg"
                alt="ass-img2"
              ></img>
              <img
                class="w-full h-16 md:w-80 md:h-14 m-4"
                src="\images\ass-img3.jpeg"
                alt="ass-img3"
              ></img>
            </div>
            <div class="f_mid_ass-img-col2 w-full md:w-1/2">
              <img
                class="w-full h-16 md:w-80 md:h-14 m-4"
                src="\images\ass-img4.jpeg"
                alt="ass-img4"
              ></img>
              <img
                class="w-full h-16 md:w-80 md:h-14 m-4"
                src="\images\ass-img5.jpeg"
                alt="ass-img5"
              ></img>
              <p class="font-bold text-xl text-center pl-4 ">& many more..</p>
            </div>
          </div>
        </div>

        <div class="f_right w-full md:w-1/2 m-4">
          <h4 class="font-medium text-xl pb-7">CONTACT US</h4>
          <div class="f_right_contact-1 ">
            <h4 class="text-xl font-medium pb-3">Jay Shah</h4>
            <li>
              <i class="fa fa-phone fa-flip-horizontal mr-2 text-[#1F19A8]"></i>
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
      <div class="copywright text-center">
        <p>
          Copyright © 2021 Wealth Management & Loans | Powered by Waterfront
          Capital Services LLP
        </p>
      </div>
    </footer>
  );
}
