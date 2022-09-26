import classNames from "classnames";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
type TUser = {
  avatar:string,
  name:string,
}
type TChat = {
  id:number,
  user:TUser,
  lastMessage:string,
  unread?: boolean,
}
export const ChatList = () => {
  const {conversationId} = useParams();
  const chats :Array<TChat>= [
    {
      id: 1,
      user: {
        avatar:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg",
        name: "Fatih Terim",
      },
      lastMessage: "Mock Data1",
    },

    {
      id: 2,
      user: {
        avatar:
          "https://pps.whatsapp.net/v/t61.24694-24/107699925_111314230513614_8434186214804513038_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVy0Snm7154Smkneq8EDc0YhgT2SnxE_tndhWtvHwbBerg&oe=630C770C",
        name: "Cutay",
      },
      lastMessage: "Mock Data2",
    },

    {
      id: 3,
      user: {
        avatar:
          "https://pps.whatsapp.net/v/t61.24694-24/254747326_930149280964078_9189936790928159756_n.jpg?ccb=11-4&oh=01_AVw7cG1f-Z3yyRGSIUtU4ppNLDSTHZVq8ud7axvACXqjbQ&oe=630D9A9D",
        name: "Batu",
      },
      lastMessage: "Mock Data3",
      unread: true,
    },
  ];
  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3 ">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">16 request</button>
      </header>
      {chats.map((chat: TChat) => (
        <NavLink
          key={chat.id}
          to={`/inbox/${chat.id}`}
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat.unread,
            "!bg-[#efefef]":Number(conversationId)===chat.id
          })}
        >
          <img src={chat.user.avatar} className="w-14 h-14 rounded-full" />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
