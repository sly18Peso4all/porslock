import React from "react";
import aboutImg from "../images/about.jpg";

function About() {
  return (
    <>
      <div className="about-page">
        <h1>About Porslock</h1>
        <p> Read our Amazing story..</p>
      </div>
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-info">
            <h2>10yeras of Rich History</h2>
            <h4>Welcome to Porslock ~ Hotels</h4>
            <p>
              Porslock Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequa.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
