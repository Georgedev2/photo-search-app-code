import React, { useState } from "react";
import "./skelental-loader.css";

function SkelentalLoader() {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="loader-cards">
      {arr.map((el) => (
        <div className="loader-card animate" key={el}>
          <div className="loader-card_body">
          <div className="text-title animate"></div>
          <div className="text-location animate"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkelentalLoader;