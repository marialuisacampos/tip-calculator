import React from "react";

interface Props {
  type: "number";
  value?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputNumber = ({ type, value, onChange, placeholder }: Props) => {
  return (
    <input
      className="bg-blue-200 py-2 rounded font-bold text-xl text-right text-blue-300 px-4 mb-8 md:mr-4"
      type={type}
      min="0"
      step="any"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputNumber;
