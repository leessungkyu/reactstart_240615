import { CSSProperties } from "react";

type HardButtonProps = {
  content: string;
};

const HardButton = ({ content }: HardButtonProps) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "32px",
    borderRadius: "0",
    border: "none",
    padding: "10px 45px",
  };
  return (
    <>
      <button style={ButtonStyle}>{content}</button>
    </>
  );
};

export default HardButton;
