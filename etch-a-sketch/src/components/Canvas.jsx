import React, { useState } from "react";
import Block from "./Block";

const Canvas = ({ size, currentColor, random, setBlocks }) => {
  const [clicked, setClicked] = useState(false);
  const boxes = [];
  const Clicked = () => {
    setClicked(true);
  };

  const notClicked = () => {
    setClicked(false);
  };
  for (let i = 0; i < size * size; i++) {
    boxes.push(
      <Block clicked={clicked} currentColor={currentColor} random={random} />
    );
  }
  console.log(boxes);
  const boxColors = boxes.map((box) => {});

  return (
    <div
      className="canvas"
      style={{
        gridTemplateColumns: `repeat(${size},1fr)`,
        minWidth: 600,
        minHeight: 600,
        border: "1px solid black",
        display: "grid",
        draggable: false,
      }}
      onMouseDown={Clicked}
      onMouseUp={notClicked}
      onMouseLeave={notClicked}
      onDragOver={notClicked}
    >
      {boxes}
    </div>
  );
};

const styles = {
  width: 400,
  height: 400,
  border: "1px solid black",
  display: "grid",
};

export default Canvas;
