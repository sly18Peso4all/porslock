import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SingleRoom({ state }) {
  const { slug } = useParams();
  const [currentRoom, setCurrentRoom] = useState();
  useEffect(() => {
    if (!slug) return;
    const curRoom = state.featuredRooms.find((room) => room.slug === slug);
    setCurrentRoom(curRoom);
  }, [slug, state]);

  return (
    <div className="single-room-section">
      {currentRoom ? (
        <>
          <img
            src={currentRoom.images[0]}
            className="single-room-hero"
            alt={currentRoom.name}
          />
          <div className="image-display">
            <img
              src={currentRoom.images[1]}
              className="slug-image"
              alt={currentRoom.name}
            />
            <img
              src={currentRoom.images[2]}
              className="slug-image"
              alt={currentRoom.name}
            />
            <img
              src={currentRoom.images[3]}
              className="slug-image"
              alt={currentRoom.name}
            />
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>Room Details</h3>
              <p>{currentRoom.description}</p>
            </article>
            <article className="info">
              <h3>Information</h3>
              <p>price: ${currentRoom.price}</p>
              <p>size: {currentRoom.size}Sqm</p>
              <p>max capacity: {currentRoom.capacity} person(s)</p>
              <p>{currentRoom.pets ? "pets allowed" : "no pets allowed"}</p>
              <p>
                {currentRoom.breakfast
                  ? "No breakfast"
                  : "free breakfast avialable"}
              </p>
            </article>
          </div>
          <div className="room-extras">
            <h3>extras</h3>
            <ul className="extras">
              {currentRoom.extras.map((extra, index) => (
                <li key={index} value={extra}>
                  - {extra}
                </li>
              ))}
            </ul>
          </div>

          <Link to="#">Hey</Link>
        </>
      ) : (
        "loading data.."
      )}
    </div>
  );
}

export default SingleRoom;
