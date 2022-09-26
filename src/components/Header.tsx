import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../firebase";
import { Icon } from "./Icon";
import { Search } from "./Search";

export const Header = () => {

  const user = useSelector((state:any)=>state.auth.user);
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
        <nav className="flex items-center gap-x-6">
          <NavLink to="/">
          {({isActive})=>isActive? <Icon name="home-filled" size={24} />: <Icon name="home" size={24} />
  }
               </NavLink>
          <NavLink to="/inbox">
            {({isActive})=>isActive? <Icon name="direct-filled" size={24} />: <Icon name="direct" size={24} />
  }
          </NavLink>
          <NavLink to="/">
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
          {({isActive})=><img className={
            classNames({
              "w-6 h-6 rounded-full":true,
              "ring-1 ring-offset-1 ring-black":isActive
            })
          }src="/no-avatar.jpeg" />
  }
     
             </NavLink>

             <button onClick={()=>logout()}>logOut</button>
        </nav>
      </div>
    </header>
  );
};
