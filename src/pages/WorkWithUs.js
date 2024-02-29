import { useState } from "react";
import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsApp";
import Footer from "../components/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function WorkWithUs() {
  const [selected, setSelected] = useState([false, false, false]);

  return (
    <>
      <Navbar />
      <div class="work_with_us m-[1rem] mb-[5rem] flex flex-col md:flex-row text-[14px]">
        <div class="work_with_us-left   md:w-1/2 m-[2rem]">
          <div class="work_with_us-box-slider ">
            <div class="box-slider group p-3 border border-black ">
              <h2
                onClick={() =>
                  setSelected((arr) => [...arr, (arr[0] = !arr[0])])
                }
                name="employment"
                class="font-bold "
              >
                {selected[0] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                Employment
              </h2>
              {selected[0] ? (
                <div class="box-1 ">
                  <ul className="employment-content">
                    <br></br>
                    <li>
                      What makes a great career anywhere? Before which let us
                      wonder whether great careers are born or made? At
                      Waterfront Capital, they are both born and made. Because
                      when you’re at Waterfront Capital, you’re already at the
                      next level of technology and innovation. And we provide
                      you with every possible opportunity to inspire you – to
                      make you go beyond what you think might be possible.
                    </li>
                    <br></br>
                    <li>
                      If someone dreams of the world as a playground, he/she
                      definitely need the best coaching. This is exactly what
                      you can expect at Waterfront Capital. Whether it’s helping
                      you becoming better at what you’re already good at, or
                      helping you discover what you’re the best at, we have the
                      right plan and programs for you and your intellect. We
                      have all the definitions of growth in terms of going
                      vertical, lateral, incremental or exponential.
                    </li>
                  </ul>
                </div>
              ) : (
                false
              )}
            </div>
            <div class="box-slider group  p-3 border border-black ">
              <h2
                onClick={() =>
                  setSelected((arr) => [...arr, (arr[1] = !arr[1])])
                }
                class="font-bold "
              >
                {selected[1] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                Internship
              </h2>
              {selected[1] ? (
                <div class="box-2 ">
                  <ul className="internship-content">
                    <br></br>
                    <li>
                      We believe that no organization can function without
                      interns. They are the building blocks of the future (and
                      also the ones who do all the jobs which at times no one
                      else wants to). We offer serious internship program and
                      also confess that some of the best work that has happened
                      in our company has been done by Interns.
                    </li>
                    <br></br>
                    <li>
                      For getting best of the experience while interning with
                      us, go through the list of personal advices from our side.
                    </li>
                    <br></br>
                    <li>
                      Make sure you always reflect how creative, dedicated and
                      hard working you are.
                    </li>
                    <br></br>
                    <li>Please avoid following descriptions in your resume;</li>
                    <br></br> <li>“I want to put my sincere efforts…..”</li>
                    <br></br> <li>“I co-relate my goals in sync with…”</li>
                    <br></br>
                    <li>“I wish to give a kick start to my career..” etc</li>
                    <br></br>
                    <li>
                      We offer internship programs to students showing highest
                      level of seriousness and discipline in execution of work.
                    </li>
                    <br></br>
                    <li>
                      Enjoy the work and make sure you keep no commitments apart
                      from us because we are going to keep you engaged 24*7.
                    </li>
                    <br></br>
                    <li>
                      We accept interns of all mentality, attitude, shapes and
                      sizes for any department be it design, marketing, finance,
                      purchasing, etc.
                    </li>
                  </ul>
                </div>
              ) : (
                false
              )}
            </div>
            <div class="box-slider group  p-3 border border-black  ">
              <h2
                onClick={() =>
                  setSelected((arr) => [...arr, (arr[2] = !arr[2])])
                }
                class="font-bold "
              >
                {selected[2] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                Referral Partner
              </h2>
              {selected[2] ? (
                <div class="box-3 ">
                  <ul className="referral-partner-content">
                    <br></br>
                    <li>
                      It has always been our endeavour to make suitable
                      investment avenues available to investor’s right up to the
                      last mile. With this in focus, we provide a lucrative
                      business opportunity to individual and companies to use
                      our distribution platform.
                    </li>
                    <br></br>
                    <li>
                      Our Business Affiliates can cater to clients with
                      financial objectives in the secondary markets and primary
                      market with products like mutual fund, PMS, AIF, structure
                      product, various loans, all types of insurance and
                      investment based immigration visas.
                    </li>
                    <br></br>
                    <li>
                      With over 20 years of experience in the financial markets
                      domain, we provide our Partners with expertise & vast
                      bouquet of products and services, in-depth research,
                      robust technology, secure risk management system and
                      dedicated business development support which drives their
                      business successfully.
                    </li>
                  </ul>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
        <div class="work_with_us-right flex flex-col md:w-1/2 m-[2rem]">
          <div class="">
            <p>
              We appreciate your expression of interest towards getting an
              association with Waterfront Capital. We also congratulate you
              since your selection here will guarantee you a career with
              learning and grilling experience. Kindly fill in the details below
              and submit.
            </p>
            <div class="flex flex-col mt-5">
              <input
                class=" placeholder-black border border-black  p-2 rounded-[30px] my-3"
                placeholder="Name"
                type="text"
              />
              <input
                class=" placeholder-black border border-black  p-2 rounded-[30px] my-3"
                placeholder="Email"
                type="email"
              />
              <input
                class=" placeholder-black border border-black  p-2 rounded-[30px] my-3"
                placeholder="Phone No."
                type="text"
              />
            </div>
            <div class="flex flex-col">
              <h2 class="mt-2">Resume/CV</h2>
              <input type="file" />
              <button
                class="bg-[#1F19A8] text-[#ffffff] py-[6px] mt-6 rounded-[30px] w-[120px]"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}
