import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

export const Message = ({ message }: any) => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user.uid === message.from.id);
  return (
    <div
      className={classNames({
        "flex gap-x-2 max-w-[47%] ": true,
        "self-end": user.uid === message.from.id,
      })}
    >
      {user.uid !== message.from.id && (
        <img src={message.from.avatar} className=" w-6 h-6 self-end rounded-full mb-1" />
      )}
      <p style={{hyphens:"auto"}} className={classNames({
        "min-h-[44px] inline-flex items-center py-3 px-4 rounded-3xl  text-sm":true,
        "border border-gray-200": user.uid !== message.from.id,
        "bg-[#efefef]":user.uid === message.from.id,
      })}>
        {message.message}
      </p>
    </div>
  );
};
