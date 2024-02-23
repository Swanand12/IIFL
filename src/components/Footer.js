export default function Footer() {
  return (
    <div className="footer">
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
      <div className="f_mid">
        <h4>ASSOCIATION</h4>
        <div className="f_mid_img">
          <div className="f_mid_ass-img-col1">
            <img src="\images\ass-img1.jpeg" alt="ass-img1"></img>
            <img src="\images\ass-img2.jpeg" alt="ass-img2"></img>
            <img src="\images\ass-img3.jpeg" alt="ass-img3"></img>
          </div>
          <div className="f_mid_ass-img-col1">
            <img src="\images\ass-img4.jpeg" alt="ass-img4"></img>
            <img
              className="f_mid_ass-img5"
              src="\images\ass-img5.jpeg"
              alt="ass-img5"
            ></img>
            <p>& many more..</p>
          </div>
        </div>
      </div>
      <div className="f_right">
        <h4>REACH US</h4>
        <div className="f_right_contact-1">
          <h4>Jay Shah</h4>
          <li>
            <i className="fa fa-phone"></i>
            <span>+91 99875 42828</span>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span>jay@waterfrontcapital.in</span>
          </li>
        </div>
        <div className="f_right_contact-2">
          <h4>Piyush Kothari</h4>
          <li>
            <i className="fa fa-phone"></i>
            <span>+91 89760 21948</span>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span>piyush@waterfrontcapital.in</span>
          </li>
        </div>
      </div>
    </div>
  );
}
