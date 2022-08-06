import React from "react";

interface Props {
  children: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  type: "reset";
}

const ButtonReset = ({ onClick, children, type }: Props) => {
  return (
    <button
      className="bg-blue-500 py-2 rounded-md text-blue-300 font-extrabold text-xl hover:bg-blue-600 px-[102px] uppercase md:mt-[135px]  transition duration-300"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonReset;
