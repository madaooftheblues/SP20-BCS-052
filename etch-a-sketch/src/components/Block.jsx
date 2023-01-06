import React, { useState } from "react";

const Block = ({ clicked, currentColor, random }) => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (c) => {
    setBgColor(c);
  };

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  return (
    <div
      className="block"
      style={{
        border: "1px solid rgb(255,192,203,0.5)",
        backgroundColor: bgColor,
        draggable: false,
      }}
      onMouseMove={() => {
        if (!clicked) return;
        if (random) return changeColor(randomColor());
        changeColor(currentColor);
      }}
      onClick={() => changeColor(currentColor)}
    ></div>
  );
};

export default Block;
