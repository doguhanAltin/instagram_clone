import React from "react";
type TSeparatorType = {
  label?: string;
};
export const Separator = ({ label = "OR" }: TSeparatorType) => {
  return (
    <div className="flex items-center ">
      <div className="h-px bg-gray-300 flex-1" />
      <span className="px-4 text-[13px] text-gray-500 font-semibold my-2 mb-3.5">
        {label}{" "}
      </span>
      <div className="h-px bg-gray-300 flex-1" />
    </div>
  );
};
