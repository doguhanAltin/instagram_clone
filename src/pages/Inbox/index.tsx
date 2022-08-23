import React from "react";
import { Outlet } from "react-router-dom";
import { InboxSidebar } from "./components/InboxSidebar";

function InboxLayout() {
  return (
    <div className="border border-gray-300  rounded bg-white h-[calc(100vh-97px)] flex">
      <InboxSidebar />
      <Outlet />
    </div>
  );
}

export default InboxLayout;
