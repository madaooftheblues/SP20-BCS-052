import React, { useState } from "react";

const Slider = ({ changeCanvasSize }) => {
  const [value, setValue] = useState(16);

  const changeValue = (val) => {
    setValue(val);
  };

  return (
    <div className="slider-container" style={styles.container}>
      <input
        className="slider"
        style={styles.slider}
        type="range"
        min={1}
        max={42}
        onChange={(e) => {
          changeValue(e.target.value);
          changeCanvasSize(value);
        }}
      />
      <h3>
        {value}x{value}
      </h3>
    </div>
  );
};

const styles = {
  slider: {
    height: 10,
    backgroundColor: "pink",
    WebkitAppearance: "none",
    color: "black",
    marginBottom: 15,
  },
};

export default Slider;
