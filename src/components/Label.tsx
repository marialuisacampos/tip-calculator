import React from "react";

interface Props {
  children: string;
}

const Label = ({ children }: Props) => {
  return <label className="font-bold text-gray-100">{children}</label>;
};

export default Label;
