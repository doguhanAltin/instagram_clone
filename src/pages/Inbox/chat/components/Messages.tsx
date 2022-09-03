import React from "react";
import { Message } from "./Message";
import ScrollToBottom from 'react-scroll-to-bottom';

export const Messages = ({messages,key}:any) => {
  return <ScrollToBottom className="h-[calc(100%-144px)] px-4 owerflow-auto  messages-box">
     <main style={{display: "flex",
    flexDirection: "column",
    gap: "2px",}} className="mb-auto">{messages.map((message:any,key:any)=>(<Message message={message} key={key}/>))}</main>
  </ScrollToBottom>;
};
