import React from "react";
import { useSelector } from "react-redux";
import { Navigate,useLocation } from "react-router-dom";

export const PrivateRoute = ({children}:any) => {
    const user = useSelector((state:any)=>state.auth.user);
    const location = useLocation()
    if(user) {
        return children
    }
  return <Navigate to="auth/login" replace={true} state={{
    return_url:location.pathname
  }} />;
};
