import { CSSProperties } from "react";

type ButtonProps = {
  CircleBakColor: string;
  Texts: String;
};

const PillBtn = ({ CircleBakColor, Texts }: ButtonProps) => {
  const divStyle: CSSProperties = {
    border: "1px solid black",
    borderRadius: "15px",
    display: "flex",
    padding: "5px",
    width: "fit-content",
    gap: "5px",
  };
  const leftCircle: CSSProperties = {
    borderRadius: "50px",
    background: CircleBakColor,
    width: "20px",
    height: "20px",
  };
  const rightCircle: CSSProperties = {
    borderRadius: "50px",
    background: "gray",
    width: "20px",
    height: "20px",
    color: "white",
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <div style={leftCircle}></div>
      <div style={{ lineHeight: "20px" }}>{Texts}</div>
      <div style={rightCircle}>X</div>
    </div>
  );
};

export default PillBtn;
