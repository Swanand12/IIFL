function Navbar() {
  return (
    <div className="flex bg-sky-700 flex-row justify-around p-2 text-sm font-semibold text-white">
      <div>
        <img src="../../Images/logo.png" className="h-14" alt="logo.png" />
      </div>
      <div className="flex flex-row items-center list-none space-x-10">
        <li>
          <a href="a" className="hover:text-cyan-300">
            HOME
          </a>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            ABOUT US
          </a>
          <div className="absolute top-17 bg-white z-10">
            <li className="mb-px text-black">
              <a href="a" className="">
                Overview
              </a>
            </li>
            <li className="my-px text-black">
              <a href="a">Why Waterfront?</a>
            </li>
            <li>
              <a href="a">Our Team</a>
            </li>
          </div>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            INVESTMENTS
          </a>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            LOANS
          </a>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            WORK WITH US
          </a>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            REACH US
          </a>
        </li>
        <li>
          <a href="a" className="hover:text-cyan-300">
            CLIENT LOGIN
          </a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
