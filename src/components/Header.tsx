import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="h-[60px] bg-white border-b border-gray-300">
        <div className="flex items-center justify-between h-[60px] container mx-auto ">


        <Link to={"/"}>
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          className="h-[29px]"
        />
      </Link>
<Search />
<nav onClick={logout}>
    Logout
</nav>

        </div>

    </header>
  );
};
