import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
};
