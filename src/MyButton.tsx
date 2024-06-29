import { useState } from "react";

const MyButton = () => {
  const [num, setNum] = useState(0);

  const handleplus = () => {
    if (num < 10) {
      setNum((v) => v + 1);
    }
  };
  const handleminus = () => {
    if (num > 0) {
      setNum((v) => v - 1);
    }
  };

  const handle = (add: number) => {
    if (num > (add > 0 ? -1 : 0)) {
      setNum((v) => v + add);
    }
  };
  // 0 이하로는 안내려가고, 숫자 10 이상은 안되고, 숫자 10이되면 글씨가 빨간색
  return (
    <div>
      <span className={num >= 10 ? "text-red-600" : "text-sky-600"}>{num}</span>
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button>

      <br />
      <button onClick={() => handle(1)}>++++</button>
      <button onClick={() => handle(-1)}>----</button>
    </div>
  );
};

export default MyButton;
