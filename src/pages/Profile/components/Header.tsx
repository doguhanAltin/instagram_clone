import React from "react";
type TUser = {
  username: string;
  posts: string;
  followers: Array<string>;
  following: Array<string>;
};
type TProps = {
  user: TUser;
};
export const Header = ({ user }: TProps) => {
  return (
    <header className="flex items-center gap-x-24 px-24 py-4 pb-10 ">
      <img
        src="/no-avatar.jpeg"
        className="w-[150px] h-[150px] rounded-full"
      ></img>
      <div>
        <div className="mb-4">
          <h1 className="text-[28px] font-light">{user.username}</h1>
        </div>
        <nav className="flex gap-x-6 items-center">
          <div>
            <span className="font-semibold">{user.posts}</span> posts
          </div>
          <div>
            <span className="font-semibold">{user.followers.length}</span>{" "}
            followers
          </div>
          <div>
            <span className="font-semibold">{user.following.length} </span>
            following
          </div>
        </nav>
      </div>
    </header>
  );
};
