import React from "react";

export default function Reservation() {
  // const [formState, setFormState] = useState({});

  // // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/bookings", {
  //     method: "POST",
  //     body: JSON.stringify(formState),
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     "Access-Control-Allow-Origin": "http://localhost:4000",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res) /*history.push(res.redirectUrl)*/)
  //     .catch((err) => console.log(err));
  // };
  // const handleChange = (e) => {
  //   setFormState((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  return (
    <div className="form-container" style={{ marginTop: "100px" }}>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name here"
              name="first"
            />
          </li>
          {/* <li>
            <label for="number_of_children">Adult</label>
            <select id="number_of_adults">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </li> */}
          <li>
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name here"
              name="last"
            />
          </li>
          <li>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              name="email"
            />
          </li>
          <li>
            <label for="address">Address:</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address here"
              name="address"
            />
          </li>

          <li>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" placeholder="Enter your phone here" />
          </li>
          {/* <li>
            <label for="arrival">Arrival date</label>
            <input type="text" name="start_date" id="arrival" />
          </li>
          <li>
            <label for="departure">Departure date</label>
            <input type="text" name="end_date" id="departure" />
          </li>
          <li>
            <label for="number">Room Number</label>
            <input
              type="number"
              placeholder="Enter room number"
              name="room_number"
            />
          </li>

          // <li>
          //   <label for="phone">Phone</label>
          //   <input type="tel" id="phone" placeholder="Enter your phone here" />
           </li>
          <li>
            <label for="room_number">Room Number</label>
            <select id="room_number">
              <option value="200">200</option>
              <option value="201">201</option>
              <option value="202">202</option>
              <option value="203">203</option>
              <option value="204">204</option>
              <option value="5">205</option>
            </select>
          </li>
          <li>
            <label for="number_of_infants">Number of infants</label>
            <select id="number_of_infants">
              <option value="0"> 00</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </li>
          <li>
            <label for="number_of_children">Number of Children</label>
            <select id="number_of_children">
              <option value="0"> 00</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </li> */}
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
