import React from "react";

import Cards from "../data/Cards";

export default function Amenties() {
  return (
    <div className="card-section">
      <h2>Explore our Amenties</h2>
      <div className="card-container">
        {Cards.map((card, index) => (
          <article className="card" key={index} value={card}>
            <div className="card-header">
              <img src={card.image} alt=""></img>
            </div>
            <div className="card-body">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
