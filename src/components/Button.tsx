import React from "react";
type TButtonProps = {
  type?: string,
  children: React.ReactNode,
  disabled?:boolean,
//   props: any,
};
export const Button = ({ type = "button",children ,disabled }: TButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="h-[30px] mt-1 w-full flex items-center justify-center gap-x-2 rounded-sm bg-brand font-medium text-white text-sm disabled:opacity-50"
    >
{children}    </button>
  );
};
