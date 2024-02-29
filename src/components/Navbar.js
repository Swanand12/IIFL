import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Navbar() {
  const [navBar, setNavBar] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <>
      {/* FOR SMALL SCREEN DEVICE */}
      <div className="lg:hidden">
        <div className="flex bg-sky-700 flex-row justify-between px-16 text-sm font-semibold text-white">
          <div className="flex items-center h-[4.5rem]">
            <img src="../../Images/logo.png" className="h-14" alt="logo.png" />
          </div>
          <span className="flex items-center">
            <MenuIcon
              onClick={() => setNavBar((arr) => [...arr, (arr[0] = !arr[0])])}
            />
          </span>
        </div>
        <div className={navBar[0] ? "h-[18.5rem] overflow-scroll" : "hidden"}>
          <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
            <a href="a">HOME</a>
          </div>
          <div
            className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
            onClick={() => setNavBar((arr) => [...arr, (arr[1] = !arr[1])])}
          >
            <a href="a">ABOUT US</a>
            {navBar[1] ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </div>
          <div className={navBar[1] ? "ABOUT US" : "hidden"}>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Overview</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Why Waterfronts?</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Our Team</a>
            </div>
          </div>
          <div
            className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
            onClick={() => setNavBar((arr) => [...arr, (arr[2] = !arr[2])])}
          >
            <a href="a">INVESTMENTS</a>
            {navBar[2] ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </div>
          <div className={navBar[2] ? "INVESTMENTS" : "hidden"}>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[5] = !arr[5])])}
            >
              <a href="a">Equity</a>
              {navBar[5] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[5] ? "Equity" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Broking</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Mutual Funds</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">PMS</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">AIF</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Offshore Investments</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Structured Products</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Unlisted Shares</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Private Equity</a>
              </div>
            </div>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[6] = !arr[6])])}
            >
              <a href="a">Fixed Income</a>
              {navBar[6] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[6] ? "Fixed Income" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Bonds</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Mutual Funds</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">PMS</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">AIF</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">NCD</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Structured Products</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Preference Shares</a>
              </div>
            </div>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[7] = !arr[7])])}
            >
              <a href="a">Insurance</a>
              {navBar[7] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[7] ? "Insurance" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Term Insurance</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">ULIP</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Traditional Plans</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Health Insurance</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Motor Insurance</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">General Insurance</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Group Insurance</a>
              </div>
            </div>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[8] = !arr[8])])}
            >
              <a href="a">Real Estate</a>
              {navBar[8] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[8] ? "Real Estate" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Advisory</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Structured Deal</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">PMS</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">AIF</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Pre-leased Deals</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Offshore Real Estate</a>
              </div>
            </div>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[9] = !arr[9])])}
            >
              <a href="a">Residency Programs</a>
              {navBar[9] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[9] ? "Residency Programs" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">EB5 (USA)</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Golden Visa (Europe)</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">UK Residency</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Grenada Citizenship</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Canada Residency</a>
              </div>
            </div>
            <div
              className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
              onClick={() => setNavBar((arr) => [...arr, (arr[10] = !arr[10])])}
            >
              <a href="a">Succession Planning</a>
              {navBar[10] ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </div>
            <div className={navBar[10] ? "Succession Planning" : "hidden"}>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Wills</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Trust</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Inheritence</a>
              </div>
              <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
                <a href="a">Text Planning</a>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
            onClick={() => setNavBar((arr) => [...arr, (arr[3] = !arr[3])])}
          >
            <a href="a">LOANS</a>
            {navBar[3] ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </div>
          <div className={navBar[3] ? " LOANS" : "hidden"}>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Loan Against Property</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Loan Against Securities</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Home Loan</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Business Loan</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Working Capital</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Lease Rental Discounting</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">ESOP Funding</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">IPO Funding</a>
            </div>
          </div>
          <div
            className="flex justify-between items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]"
            onClick={() => setNavBar((arr) => [...arr, (arr[4] = !arr[4])])}
          >
            <a href="/work-with-us">WORK WITH US</a>
            {navBar[4] ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </div>
          <div className={navBar[4] ? "WORK WITH US" : "hidden"}>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Employment</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Internship</a>
            </div>
            <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
              <a href="a">Referral Partner</a>
            </div>
          </div>
          <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
            <a href="/contact-us">CONTACT US</a>
          </div>
          <div className="flex items-center h-10 py-6 px-8 bg-cyan-100 mb-[1.5px]">
            <a href="a">CLIENT LOGIN</a>
          </div>
        </div>
      </div>

      {/* FOR LARGE SCREEN DEVICE */}
      <div className="hidden lg:block">
        <div className="flex bg-sky-700 flex-row justify-around px-2 text-sm font-semibold text-white">
          <div className="flex items-center h-[4.5rem]">
            <img src="../../Images/logo.png" className="h-14" alt="logo.png" />
          </div>
          <div className="flex max flex-row items-center list-none space-x-10 h-[4.5rem]">
            <li className="flex items-center h-[4.5rem]">
              <a href="a" className="hover:text-cyan-300">
                HOME
              </a>
            </li>
            <li className="flex items-center h-[4.5rem] group">
              <a href="a" className="hover:text-cyan-300">
                ABOUT US
                <ExpandMoreIcon fontSize="small" />
              </a>
              <div className="hidden group-hover:block absolute top-[4.5rem] bg-white z-10 w-52 shadow-md">
                <ul>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                    <a href="a">Overview</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Why Waterfront?</a>
                  </li>
                  <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                    <a href="a">Our Team</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center h-[4.5rem] group/kan">
              <a href="a" className="hover:text-cyan-300">
                INVESTMENTS
                <ExpandMoreIcon fontSize="small" />
              </a>
              <div className="hidden group-hover/kan:block absolute top-[4.5rem] bg-white z-10 w-52 shadow-md">
                <ul>
                  <li className="flex justify-between group items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                    <a href="a">Equity</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[0.1rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">Broking</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Mutual Funds</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">PMS</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">AIF</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Offshore Investments</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Structured Products</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Unlisted Shares</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Private Equity</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex justify-between group items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Fixed Income</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[2.6rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">Bonds</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Mutual Funds</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">PMS</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">AIF</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">NCD</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Structured Products</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Preferences Shares</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex justify-between group items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Insurance</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[5.2rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">Term Insurance</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">ULIP</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Traditional Plans</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Health Insurance</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Motor Insurance</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">General Insurance</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Group Insurance</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex justify-between group items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Real Estate</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[7.8rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">Advisory</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Structured Deals</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">PMS</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">AIF</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Pre-Leased Deals</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Offshore Real Estate</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex justify-between group items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Residency Programs</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[10.4rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">EB5 (USA)</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Golden Visa (Europe)</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">UK Residency</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Grenada Citizenship</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Canada Residency</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex justify-between group items-center px-4 text-black h-10 bg-cyan-100">
                    <a href="a">Succession Planning</a>
                    <NavigateNextIcon fontSize="small" />
                    <div className="hidden group-hover:block absolute top-[13rem] left-[13rem] bg-white z-10 w-52 shadow-md">
                      <ul>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                          <a href="a">Wills</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Trust</a>
                        </li>
                        <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                          <a href="a">Inheritence</a>
                        </li>
                        <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                          <a href="a">Tax Planning</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center h-[4.5rem] group">
              <a href="a" className="hover:text-cyan-300">
                LOANS
                <ExpandMoreIcon fontSize="small" />
              </a>
              <div className="hidden group-hover:block absolute top-[4.5rem] bg-white z-10 w-52 shadow-md">
                <ul>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                    <a href="a">Loan Against Property</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Loan Against Securities</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Home Loan</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Business Loan</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Working Capital</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Lease Rental Discounting</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">ESOP Funding</a>
                  </li>
                  <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                    <a href="a">IPO Funding</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center h-[4.5rem] group">
              <a href="/work-with-us" className="hover:text-cyan-300">
                WORK WITH US
                <ExpandMoreIcon fontSize="small" />
              </a>
              <div className="hidden group-hover:block absolute top-[4.5rem] bg-white z-10 w-52 shadow-md">
                <ul>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100 border-t-2 border-blue-950">
                    <a href="a">Employment</a>
                  </li>
                  <li className="flex items-center px-4 mb-[1.5px] text-black h-10 bg-cyan-100">
                    <a href="a">Internship</a>
                  </li>
                  <li className="flex items-center px-4 text-black h-10 bg-cyan-100">
                    <a href="a">Referral Partner</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-cyan-300">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-cyan-300">
                CLIENT LOGIN
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
