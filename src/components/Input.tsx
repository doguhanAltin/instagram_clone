import { useField } from "formik";
import React from "react";
import classNames from "classnames";

type TInputProps = {
  label: string;
name:string,
type:string,
};
export const Input  = ({ label, ...props }: TInputProps) => {

  const [field,meta,helpers]= useField(props);
  return (
    <label className="block relative flex bg-zinc50 border rounded-sm focus-within:border-gray-400">
      <input
      {...field}
        required
        type={props.type}
        className={classNames({
          "px-2 outline-none text-xs w-full h-[38px]":true,
          " pt-[10px] ":field.value
        })}
      />
      <small className={classNames({
        "absolute cursor-text pointer-events-none  left-[9px]  text-gray-400 -translate-y-1/2 transition-all ":true,
        "text-xs top-1/2 ":!field.value,
        "text-[10px] top-2.5":field.value
      })}>
{label}
      </small>
    </label>
  );
};
