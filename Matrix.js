// src/components/Matrix.js

import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [finalClick, setFinalClick] = useState(false);

  const handleClick = (index) => {
    if (!finalClick) {
      setClickedBoxes([...clickedBoxes, index]);
    }
    if (clickedBoxes.length === 8) {
      setFinalClick(true);
    }
  };

  const getBoxColor = (index) => {
    if (finalClick) {
      return clickedBoxes.includes(index) ? "orange" : "";
    }
    return clickedBoxes.includes(index) ? "green" : "";
  };

  return (
    <div className="matrix">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: getBoxColor(index) }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
