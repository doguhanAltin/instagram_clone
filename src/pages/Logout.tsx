import React, { useEffect } from "react";
import { logout } from "../firebase";
export const Logout = () => {

useEffect(()=>{
    logout()
})


  return <div>Logout</div>;

};
