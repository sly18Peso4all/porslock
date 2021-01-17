import React from "react";
import Booking from "../component/Booking";
import FeaturedRooms from "../component/FeaturedRooms";

function Rooms({ state }) {
  return (
    <>
      <div className="room-list">
        <div className="room-booking">
          <Booking />
        </div>
      </div>
      <FeaturedRooms state={state} />
    </>
  );
}

export default Rooms;
