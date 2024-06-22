import { CSSProperties } from "react";

type CircleProps = {
  BgColor: string;
};

const Circle = ({ BgColor }: CircleProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    backgroundColor: BgColor,
    borderRadius: "50%",
  };
  return <div style={style}></div>;
};

export default Circle;
