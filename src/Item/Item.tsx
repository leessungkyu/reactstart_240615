import { CSSProperties } from "react";
import Heart from "./Heart";

type ItemProps = {
  imgUrl: string;
  title: string;
  halin: string;
  amt: string;
};

const Item = ({ imgUrl, title, halin, amt }: ItemProps) => {
  const imgStyle: CSSProperties = {
    width: "185px",
    height: "230px",
  };
  const titleStyle: CSSProperties = {
    width: "185px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };
  const halinStyle: CSSProperties = {
    color: "red",
    fontWeight: "bold",
    paddingRight: "5px",
  };
  const amtStyle: CSSProperties = {
    fontWeight: "bold",
  };

  const hearStyle: CSSProperties = {
    position: "absolute",
    color: "white",
    bottom: "10px",
    right: "10px",
  };

  return (
    <div>
      <div style={{ position: "relative", width: "180px" }}>
        <div>
          <img style={imgStyle} src={imgUrl} />
        </div>
        <div style={hearStyle}>
          <Heart />
        </div>
      </div>
      <div style={titleStyle}>{title}</div>
      <div>
        <span style={halinStyle}>{halin}</span>
        <span style={amtStyle}></span>
      </div>
    </div>
  );
};

export default Item;
