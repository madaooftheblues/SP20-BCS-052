import React from "react";
import ColorWell from "./ColorWell";
import Button from "./Button";
import Slider from "./Slider";

const Tools = ({ handleChange, changeCanvasSize, erase, randomize, clear }) => {
  return (
    <div className="tools" style={styles}>
      <ColorWell handleChange={handleChange} />
      <Button handleClick={erase}>Erase!</Button>
      <Slider changeCanvasSize={changeCanvasSize} />
      <Button handleClick={randomize}>Random</Button>
      <Button handleClick={clear}>Clear</Button>
    </div>
  );
};

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
};
export default Tools;
