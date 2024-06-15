//배경색: 여러분이 좋아하는 색
//padding: 10px 20px
//borderRadius: 8px

import { CSSProperties } from "react";

//버튼
const LargeButton = () => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: "yellowgreen",
    padding: "10px 20px",
    borderRadius: "8px",
  };
  return (
    <>
      <button style={ButtonStyle}>myButton</button>
    </>
  );
};

export default LargeButton;
