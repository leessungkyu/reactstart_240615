import { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [cnt, setCnt] = useState(0);
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(15);

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= limit) {
      setCnt((v) => e.target.value.length);
      setValue((v) => e.target.value);
    }
  };

  const clickhandle = () => {
    setLimit((v) => limit + 1);
  };
  return (
    <div className="w-fit p-4 h-auto border border-slate-300 rounded-md  ">
      <input
        value={value}
        onChange={handle}
        type="text"
        className="p-2 border border-gray-300 rouned-md focus:"
      />
      <span> {cnt} 글자</span>
      <span>/{limit}</span>
      <button onClick={clickhandle} className="border border-red-400 p-1">
        +
      </button>
    </div>
  );
};

export default InputForm;
