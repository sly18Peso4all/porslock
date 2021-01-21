import React from "react";
import { Link } from "react-router-dom";
// import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(true);
  // };

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">PORSLOCKS ~ HOTELS</Link>
            </div>
            {/* <button type="button" className="nav-btn" onClick={handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button> */}
            {/* <div className={isOpen ? "navigation show-nav" : "navigation"}> */}
            <div className="navigation">
              <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/about">About-Us</Link>
              <Link to="/contact">Contact-us</Link>
              <Link to="/rooms">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
