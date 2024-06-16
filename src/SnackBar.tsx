import { CSSProperties } from "react";
import { IoIosAlert, IoIosArrowDropdownCircle } from "react-icons/io";

type Icon = {
  iconColor: "blue" | "green" | "red";
};

const SnackBar = ({ iconColor }: Icon) => {
  const divStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    padding: "10px 20px",
    borderRadius: "10px",
  };

  const iconColorObj: Icon = {
    iconColor: iconColor,
  };
  const iconStyle: CSSProperties = {
    color: iconColor,
    backgroundColor: "white",
    borderRadius: "50px",
    padding: "1px",
  };
  return (
    <div style={divStyle}>
      <div>
        <IoIosAlert style={iconStyle} />
        <IoIosArrowDropdownCircle style={iconStyle} />
        Message
      </div>
      <div>Action</div>
    </div>
  );
};

export default SnackBar;
