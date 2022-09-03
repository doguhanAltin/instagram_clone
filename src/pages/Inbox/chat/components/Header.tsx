import React from "react";
import { Icon } from "../../../../components/Icon";
type TProps ={
user: TUser;
}
type TUser= {
 name:string,
 avatar:string
}

export const Header = ({user}:TProps) => {
  return <header
  className="h-[60px] border border-b border-gray-300 flex items-center justify-between px-6">
    <button className="flex items-center gap-x-4">
      <img src={user.avatar}  className="w-6 h-6 rounded-full" />
      <h6 className="text-base font-semibold"> {user.name} </h6>
    </button>
    <Icon name="info" size={24}></Icon>
  </header>;
};
