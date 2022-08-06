import React from "react";

interface Props {
  children?: string;
}

const Number = ({ children }: Props) => {
  return (
    <span className="mt-8 font-extrabold text-3xl text-blue-400">
      ${children}
    </span>
  );
};

export default Number;
