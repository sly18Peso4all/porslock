import React from "react";
import { Link } from "react-router-dom";
// import RoomList from "./RoomList";

function FeaturedRooms({ state }) {
  return (
    <div className="wrapper">
      <div className="wrapper-room">
        <h1>Rooms</h1>
        {state &&
          state.featuredRooms.map((room, key) => {
            return (
              <section className="featured-rooms" value={room} key={key}>
                <div className="featured-room">
                  <img
                    src={room.images[0]}
                    className="featured-image"
                    alt={room.name}
                  />
                </div>
                <div className="featured-room-type">{room.type}</div>
                <div className="featured-room-name">{room.name}</div>
                <div className="featured-room-description">
                  {room.description}
                </div>
                <div className="featured-room-button">
                  <Link to={`/rooms/${room.slug}`} className="featured-button">
                    View Details
                  </Link>
                </div>
                <div className="featured-room-box">
                  <div>${room.price} / night</div>
                  <div>{room.size} sqm</div>
                  <div>Max: {room.max} person(s)</div>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}

export default FeaturedRooms;
