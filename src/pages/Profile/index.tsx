import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../components/Icon";
import { getUserInfo } from "../../firebase";
import { setUser } from "../../store/auth";
import { Header } from "./components/Header";
import { ProfileNotFound } from "./ProfileNotFound";

type TUser = {
  username: string;
  fullName:string
  posts: string;
  followers: Array<string>;
  following: Array<string>;
};

function ProfileLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<TUser|boolean|null>(null);
  const { username } = useParams();
  useEffect(() => {
    getUserInfo(username)
      .then((user: any) => {
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);



if(user ===false){
  return <ProfileNotFound />
}

console.log(typeof user === "object")
  return !loading ? (
    <div>
      {(typeof user === "object" &&  user) &&   (  <>    <Helmet>
        <title>{user.fullName} (@{user.username}  Instagram photos and videos )</title>
      </Helmet>
      <Header user={user} />
      </>
)}

      <nav className="border-t gap-x-16 flex justify-center items-center">
        <NavLink
          to={`/${username}`}
          end={true}
          className={({ isActive }) =>
            classNames({
              "text-xs flex py-5 border-t tracking-widest  -mt-[1px] items-center gap-x-1.5 font-semibold":
                true,
              "text-[#8e8e8e]": !isActive,
              "text-black  border-black": isActive,
            })
          }
        >
          <Icon name="post" size={12} />
          POSTS
        </NavLink>
        <NavLink
          to={`/${username}/tagged`}
          end={true}
          className={({ isActive }) =>
            classNames({
              "text-xs flex py-5 border-t tracking-widest -mt-[1px] items-center gap-x-1.5 font-semibold":
                true,
              "text-[#8e8e8e]": !isActive,
              "text-black border-black": isActive,
            })
          }
        >
          <Icon name="post" size={12} />
          TAGGED
        </NavLink>
      </nav>
      <Outlet />
    </div>
  ) : (
    <div>Loading</div>
  );
}
export default ProfileLayout;
