import { ChangeEvent, useState } from "react";

type InputTypeProps = {
  typeProps: string;
  labelProps?: string;
  placeholderProps?: string;
  onChangeProps: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputType = ({
  typeProps,
  labelProps = "None",
  placeholderProps = "",
  onChangeProps,
}: InputTypeProps) => {
  return (
    <div className="border w-full p-3">
      <div className="text-lg text-slate-50-500">{labelProps}</div>
      <div>
        <input
          type={typeProps}
          placeholder={placeholderProps}
          onChange={onChangeProps}
          className="w-full border border-slate-400"
        />
      </div>
    </div>
  );
};

export default InputType;
