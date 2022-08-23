import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

export const Inbox = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-3">
      <Icon name="direct-empty" size={96} />
      <h2 className="text-[22px] font-light">Your Messages</h2>
      <p className="text-sm text-[#8e8e8e]">Send private photos and messages to a friend or group.</p>
      <div>
        <Button>Send Message</Button>
      </div>{" "}
    </div>
  );
};
