import React from "react";

interface Props {
  children: string;
}

const SubDescription = ({ children }: Props) => {
  return <span className="text-gray-200 text-sm">{children}</span>;
};

export default SubDescription;
