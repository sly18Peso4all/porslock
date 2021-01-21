import React from "react";
import ContactUs from "../component/ContactUs";

function Contact() {
  return (
    <>
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>For all enquires, please email us using the form below.</p>
      </div>
      <div className="contact-details">
        <h3>Porslocks ~ Hotels..</h3>
        <h4>Berliner Strasse 64,</h4>
        <h4>03345 Leipzig,</h4>
        <h4>Germany.</h4>
        <h4>+49 162745 2772</h4>
        <h4>contact@porslockhotels.com</h4>
      </div>

      <ContactUs />
    </>
  );
}

export default Contact;
