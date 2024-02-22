function Navbar() {
  return (
    <div id="navbar" className="flex ">
      <div id="nav_logo">
        <img src="../../Images/logo.png" alt="logo.png" />
      </div>
      <div id="nav_menu">
        <li>
          <a href="a">HOME</a>
        </li>
        <li>
          <a href="a">ABOUT US</a>
          <div className="nav_menu_dropdown">
            <li className="dropmenu">
              <a href="a">Overview</a>
            </li>
            <li>
              <a href="a">Why Waterfront?</a>
            </li>
            <li>
              <a href="a">Our Team</a>
            </li>
          </div>
        </li>
        <li>
          <a href="a">INVESTMENTS</a>
        </li>
        <li>
          <a href="a">LOANS</a>
        </li>
        <li>
          <a href="a">WORK WITH US</a>
        </li>
        <li>
          <a href="a">REACH US</a>
        </li>
        <li>
          <a href="a">CLIENT LOGIN</a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
