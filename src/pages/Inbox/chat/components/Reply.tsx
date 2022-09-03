import React, { useState } from "react";
import { Icon } from "../../../../components/Icon";

export const Reply = ({setMessages}:any) => {
  const [message, setMessage] = useState<any>("");
  const sendMessage = (e:any)=>{
   e.preventDefault(); 
   setMessages((messages:any)=>[...messages,{
    from: {
      id:"vAbbMXnN3Pei7mfn9u1UwfRA8yS2",
      name:"Doğuhan Altın",
      username:"altindoguhan",
      avatar:"https://pps.whatsapp.net/v/t61.24694-24/294726608_448120610506719_1543144370319715266_n.jpg?ccb=11-4&oh=01_AVzZye3prErhlG7APwUYLWJA7Rn2zuqNv80Jp0FdjXK45A&oe=631F8121"
    },
    message:message,
   }])
   setMessage("")
  }
  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <form onSubmit={sendMessage} className=" h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        <button className="w-[40px] h-[42px] flex items-center">
          <Icon name="emoji" size={24} />
        </button>
        <input
          className="flex-1 px-[9px] placeholder:text-gray-500 focus: text-gray-300 outline-none h-[40px] text-sm"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {!message  ? (
          <>
            <button  className="w-[40px] h-[42px] flex items-center">
              <Icon name="picture" size={24} />
            </button>
            <button className="w-[40px] h-[42px] flex items-center">
              <Icon name="heart" size={24} />
            </button>
          </>
        ):<button type="submit" className="text-brand font-semibold text-sm px-4">Send</button> }
      </form>
    </footer>
  );
};
