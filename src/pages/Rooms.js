import React from "react";
import FeaturedRooms from "../component/FeaturedRooms";

function Rooms({ state }) {
  return (
    <>
      <div className="room-list">
        <div className="room-booking">
          <h1>Porslock Rooms</h1>
          <p>See our amazing rooms</p>
        </div>
      </div>
      <FeaturedRooms state={state} />
    </>
  );
}

export default Rooms;
