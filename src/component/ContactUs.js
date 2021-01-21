import React from "react";
import Img from "../images/contact.jpg";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-image">
          <img src={Img} alt=""></img>
        </div>

        <form className="contact-info">
          <label htmlFor="fname">First Name :</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your first name ..."
          />
          <label htmlFor="lname">Last Name :</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="country">Country :</label>
          <select id="country" name="country">
            <option value="germany">Germany</option>
            <option value="nigeria">Nigeria</option>
            <option value="usa">USA</option>
          </select>
          <label htmlFor="Message">Message :</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    </div>
  );
}
