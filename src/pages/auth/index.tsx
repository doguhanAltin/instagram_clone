import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center">
        <Outlet />
    </div>
  );
};
