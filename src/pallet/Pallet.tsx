import { CSSProperties } from "react";

type PalletProps = {
  Bgcolor: string;
  Texts: string;
};

const Pallet = ({ Bgcolor, Texts }: PalletProps) => {
  const Style: CSSProperties = {
    backgroundColor: Bgcolor,
    width: "100px",
    height: "50px",
    // border: "1px solid black",
    textAlign: "center",
    lineHeight: "50px",
    fontFamily: "bold",
  };

  return (
    <div style={Style}>
      <span
        style={
          Texts >= "300" && Texts.toString().length == 3
            ? { color: "white" }
            : { color: "black" }
        }
      >
        {Texts}
      </span>
    </div>
  );
};

export default Pallet;
