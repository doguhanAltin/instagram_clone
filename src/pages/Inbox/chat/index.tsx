import React, { useState } from "react";
import { Header } from "./components/Header";
import { Messages } from "./components/Messages";
import { Reply } from "./components/Reply";

export const Chat = () => {
  const user = {
    name: "Kullanıcı 1 ",
    avatar:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg",
  };
  const [messages,setMessages] = useState( [
    { from: {
      id:"vAbbMXnN3Pei7mfn9u1UwfRA8yS2",
      name:"Doğuhan Altın",
      username:"altindoguhan",
      avatar:"https://pps.whatsapp.net/v/t61.24694-24/294726608_448120610506719_1543144370319715266_n.jpg?ccb=11-4&oh=01_AVzZye3prErhlG7APwUYLWJA7Rn2zuqNv80Jp0FdjXK45A&oe=631F8121"
    }, message: "Mesaj1" },
    {
      from: {
        id: "sadas",
        name: "Kullanıcı 1 ",
        username: "fatihterim",
        avatar:"https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg"
      },
      message:"Mesaj2"
    },
    {
      from: {
        id: "sadas",
        name: "Kullanıcı 1 ",
        username: "fatihterim",
        avatar:"https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg"
      },
      message:"Mesaj3"
    },

  ]);
  return (
    <div className="flex-1">
      <Header user={user} />
    <Messages  messages={messages} />
      <Reply setMessages= {setMessages} />
    </div>
  );
};
