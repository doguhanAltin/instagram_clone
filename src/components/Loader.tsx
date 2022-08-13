import React from "react";
import { FaInstagram } from "react-icons/fa";
export const Loader = () => {
  return (
    <div className="w-full h-full fixed  flex  flex-col bg-zinc-50  text-pink-600 justify-center items-center bg-red">
      <FaInstagram size={100}></FaInstagram>
      <h6>Instagram</h6>
    </div>
  );
};
