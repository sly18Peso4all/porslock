import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import RoomList from "./RoomList";
import Data from "../../data/Data";

function RoomDisplay() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setData(Data);
  }, []);

  // Next Button
  let nextRoom = () => {
    if (sliderIndex + 1 > data.length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  // Prev Button
  let prevRoom = () => {
    if (sliderIndex - 1 < 0) {
      setSliderIndex(data.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  return (
    <div className="slider">
      <h2>Our Rooms</h2>

      {data.length > 1 && (
        <div className="carousel-container">
          <div className="column-left">
            <i className="fas fa-arrow-left" onClick={() => prevRoom()}></i>
            <div className="room-info">
              <h3>{data[sliderIndex].title}</h3>
              <h4>{data[sliderIndex].name}</h4>
              <p>{data[sliderIndex].description}</p>

              <Link to="/rooms">See Rooms</Link>
            </div>
          </div>
          <div className="column-right">
            <img
              src={data[sliderIndex].image}
              className="slider-image"
              alt={data.name}
            />
            <i className="fas fa-arrow-right" onClick={() => nextRoom()}></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomDisplay;
