import React from "react";
import { useSelector } from "react-redux";
import { Navigate,useLocation } from "react-router-dom";

type PrivateRouteProps= {
children:JSX.Element
}
export const PrivateRoute  = ({children}:PrivateRouteProps) => {
    const user = useSelector((state:any)=>state.auth.user);
    const location = useLocation()
    console.log(typeof location.pathname)
    if(user) {
        return children
    }
  return <Navigate to="auth/login" replace={true} state={{
    return_url:location.pathname
  }} />;
};
