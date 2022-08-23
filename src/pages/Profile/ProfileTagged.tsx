import React from "react";
import { Icon } from "../../components/Icon";

export const ProfileTagged = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-10">
      <div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center">
      <Icon name="tag" size={34} /></div>
      <h6 className="text-[28px] font-light">No Photos</h6>
    </div>
  );
};
