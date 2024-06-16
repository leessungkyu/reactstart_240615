import { CSSProperties } from "react";

const CircleButton = () => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "32px",
    borderRadius: "15px",
    border: "none",
    padding: "10px 45px",
  };
  return (
    <>
      <button style={ButtonStyle}>Button</button>
    </>
  );
};

export default CircleButton;
