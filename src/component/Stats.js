import React from "react";
import StatsData from "../data/StatsData";

const Stats = () => {
  return (
    <div className="stats-container">
      <h1 className="stats-heading">Why Choose Us?</h1>
      <div className="stats-wrapper">
        {StatsData.map((stats, index) => {
          return (
            <div className="stats-box" key={index}>
              <div className="stats-icon">{stats.icon}</div>
              <h3 className="stats-title">{stats.title}</h3>
              <p className="stats-desc">{stats.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
