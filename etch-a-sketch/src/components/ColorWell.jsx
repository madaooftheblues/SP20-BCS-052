import React from "react";

const ColorWell = ({ handleChange }) => {
  return (
    <div className="colorwell-container">
      <input
        type="color"
        className="colorwell"
        style={styles}
        onChange={(e) => handleChange(e.target.value)}
        onClick={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

const styles = {
  width: 60,
  height: 60,
  border: "4px solid pink",
  outline: "none",
  backgroundColor: "pink",
};

export default ColorWell;
