import React from "react";
type TInputProps = {
  label: string;
value:string,
onChange:(e:any)=>void,
type:string,
};
export const Input  = ({ label, ...props }: TInputProps) => {
  return (
    <label className="block relative">
      <input
        value={props.value}
        onChange={props.onChange}
        required
        type={props.type}
        className="bg-zinc-50 border outlined-none w-full h-[38px] rounded-sm px-2 focus:border-gray-400 border-gray peer valid:pt-[10px] text-xs"
      />
      <small className="absolute cursor-text pointer-events-none top-1/2 left-[9px] text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
{label}
      </small>
    </label>
  );
};
