import React from "react";
type ButtonProps = {
  isPass: boolean;
};

const InputButton = ({ isPass }: ButtonProps) => {
  return (
    <button
      className={
        isPass
          ? "border border-sky-300 bg-sky-300"
          : "border border-red-300 bg-red-300"
      }
    >
      {isPass ? "등록하기" : "등록불가"}
    </button>
  );
};
export default InputButton;
