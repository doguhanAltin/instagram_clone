import React, { useState } from "react";
import { Header } from "./components/Header";
import { Messages } from "./components/Messages";
import { Reply } from "./components/Reply";

export const Chat = () => {
  const user = {
    name: "Fatih Terim",
    avatar:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg",
  };
  const [messages,setMessages] = useState( [
    { from: {
      id:"vAbbMXnN3Pei7mfn9u1UwfRA8yS2",
      name:"Doğuhan Altın",
      username:"altindoguhan",
      avatar:"https://pps.whatsapp.net/v/t61.24694-24/294726608_448120610506719_1543144370319715266_n.jpg?ccb=11-4&oh=01_AVzZye3prErhlG7APwUYLWJA7Rn2zuqNv80Jp0FdjXK45A&oe=631F8121"
    }, message: "Hocaam" },
    {
      from: {
        id: "sadas",
        name: "Fatih Terim",
        username: "fatihterim",
        avatar:"https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg"
      },
      message:"Merhaba,Admin ben Fatih Hocan"
    },
    {
      from: {
        id: "sadas",
        name: "Fatih Terim",
        username: "fatihterim",
        avatar:"https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/11/thumbs_b_c_8fe61e9f4fdf15a13e895a102669f301.jpg"
      },
      message:"Ne 13.'lüğü kalk yarın Barça ile UEFA finali var"
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
