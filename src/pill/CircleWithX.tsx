import { CSSProperties } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const CircleWithX = () => {
  const style: CSSProperties = {
    color: "gray",
  };
  return (
    <div style={style}>
      <BsFillXCircleFill />
    </div>
  );
};

export default CircleWithX;
