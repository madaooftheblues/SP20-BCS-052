import React from "react";

const Button = ({ children, handleClick }) => {
  return (
    <button className="button" style={styles} onClick={handleClick}>
      {children}
    </button>
  );
};

const styles = {
  height: 80,
  width: 80,
  backgroundColor: "black",
  color: "pink",
  border: "4px solid pink",
  borderRadius: 50,
  fontWeight: "bold",
  fontFamily: "cursive",
  fontSize: 16,
};

export default Button;
