import React, { useState } from "react";
import Canvas from "./Canvas";
import Tools from "./Tools";

const Playground = () => {
  const [currentColor, setCurrentColor] = useState("black");
  const [size, setSize] = useState(16);
  const [blocks, setBlocks] = useState([]);
  const [random, setRandom] = useState(false);

  const changeCanvasSize = (size) => {
    setSize(size);
  };

  const erase = () => {
    setRandom(false);
    setCurrentColor("white");
  };
  function handleChange(color) {
    setRandom(false);
    setCurrentColor(color);
  }
  const randomize = () => setRandom(true);

  const pass = {
    currentColor,
    setCurrentColor,
    size,
    setSize,
    blocks,
    setBlocks,
    changeCanvasSize,
    erase,
    randomize,
    random,
    handleChange,
  };

  return (
    <div className="playground" style={styles}>
      <Tools {...pass} />
      <Canvas {...pass} />
    </div>
  );
};

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 100,
};

export default Playground;
