import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">PORSLOCKS ~ HOTELS</Link>
            </div>
            <div className="navigation">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/about">About-Us</Link>
                <Link to="/contact">(0800) 43674321</Link>
                <Link to="/rooms">
                  <button>Book Now</button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
