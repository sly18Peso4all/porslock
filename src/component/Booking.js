import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
import { useHistory } from "react-router-dom";

function Booking() {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const history = useHistory();

  const setAdultSelect = (number) => {
    setAdult(number);
  };

  const setChildrenSelect = (number) => {
    setChildren(number);
  };

  const setInfantSelect = (number) => {
    setInfant(number);
  };

  const verify = () => {
    if (infant > adult) {
      alert("Number of infants cannot be greater than number of adults");
    } else {
      history.push("/rooms");
    }
  };

  return (
    <div className="booking-component">
      <div className="booking-component left">
        <DatePickerComponent />
      </div>

      <div className="booking-component right">
        <div className="booking-details-wrapper">
          <div className="picker-guest-wrapper">
            <div className="picker-wrapper guest">
              <Picker
                header="adult"
                options={["01", "02", "03", "04", "05"]}
                handler={setAdultSelect}
                initialValue={adult}
              />
            </div>
            <div className="picker-wrapper guest">
              <Picker
                header="Children"
                options={["0", "01", "02", "03", "04", "05"]}
                handler={setChildrenSelect}
                initialValue={children}
              />
            </div>
            <div className="picker-wrapper guest">
              <Picker
                header="infant"
                options={["0", "01", "02", "03", "04", "05"]}
                handler={setInfantSelect}
                initialValue={infant}
              />
            </div>
          </div>
          <BookingBtn clickHandler={verify} />
        </div>
      </div>
    </div>
  );
}

/************* DATE PICKER COMPONENT***********/

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-picker">
      <div className="date-picker-sub-left">
        <div className="date-picker-text">arrival</div>
        <DatePicker
          className="date-component"
          selected={startDate}
          selectsStart
          minDate={startDate}
          startDate={startDate}
          dateFormat=" LLLL d, yyyy"
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="date-picker-sub-right">
        <div className="date-picker-text">departure</div>
        <DatePicker
          className="date-component"
          selected={endDate}
          selectsEnd
          disabled={false}
          startDate={startDate}
          dateFormat="LLLL d, yyyy"
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
}

/**************************** Guest Picker *********************************************/
const Picker = ({ handler, header, options, initialValue }) => {
  return (
    <div className="picker-box">
      <div className="picker-name">{header}</div>
      <select
        className="picker-input"
        onChange={(e) => {
          handler(e.target.value);
        }}
      >
        {options.map((value, key) => {
          return (
            <option
              value={value}
              key={key}
              defaultValue={initialValue === parseInt(value) ? "selected" : ""}
            >
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

/*****   BookingBtn  ***** */
const BookingBtn = (props) => {
  return (
    <div
      className="booking-btn"
      onClick={() => {
        props.clickHandler();
      }}
    >
      Book Now
    </div>
  );
};

/**** ClickHander ******/
// let clickHandler = function (e) {
//   e.preventDefault();
// };

export default Booking;
