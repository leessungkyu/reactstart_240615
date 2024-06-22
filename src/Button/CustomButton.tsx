import { CSSProperties } from "react";
import { Colors, BorderRadius, bgColorobj, borderRaiusObj } from "../styles";

type ButtonProps = {
  contentProp: string;
  backgroundColor: keyof Colors;
  colorProp: string;
  borderRadiusProp: keyof BorderRadius;
};

const CustomButton = ({
  contentProp,
  backgroundColor,
  colorProp,
  borderRadiusProp,
}: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: bgColorobj[backgroundColor],
    color: colorProp,
    borderRadius: borderRaiusObj[borderRadiusProp],
    padding: "10px 45px",
    border: `1px solid ${backgroundColor}`,
    fontSize: "32px",
  };
  return (
    <div>
      <button style={ButtonStyle}>{contentProp}</button>
    </div>
  );
};

export default CustomButton;
