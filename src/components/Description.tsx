import React from "react";

interface Props {
  children: string;
}

const Description = ({ children }: Props) => {
  return <span className="text-white font-bold mt-4">{children}</span>;
};

export default Description;
