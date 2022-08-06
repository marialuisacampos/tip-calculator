import React from "react";

interface Props {
  children: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  type: "button";
  id: string;
  value: string;
}

const Button = ({ onClick, children, type, id, value }: Props) => {
  return (
    <button
      className="bg-blue-300 w-[147px] py-2 rounded-md text-white font-extrabold text-2xl hover:bg-blue-600 hover:text-blue-300"
      type={type}
      onClick={onClick}
      id={id}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
