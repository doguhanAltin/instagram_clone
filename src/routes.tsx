import { AuthLayout } from "./pages/auth";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/auth/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Register } from "./pages/auth/Register";
import ProfileLayout from "./pages/Profile";
import { ProfilePosts } from "./pages/Profile/ProfilePosts";
import { ProfileTagged } from "./pages/Profile/ProfileTagged";
import { Logout } from "./pages/Logout";
import { Inbox } from "./pages/Inbox/Inbox";
import InboxLayout from "./pages/Inbox";
import { Chat } from "./pages/Inbox/components/Chat";

interface TRoutes {
  path?: string;
  element: JSX.Element;
  auth?: boolean;
  index?: boolean;
  children?: Array<TRoutes>;
}

const routes: Array<TRoutes> = [
  {
    path: "/",
    element: <Layout />,
    auth: true,
    children: [
      { index: true, element: <Home /> },
      { path: "logout", element: <Logout /> },
      {
        path: ":username",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <ProfilePosts /> },
          { path: "tagged", element: <ProfileTagged /> },
        ],
      },
      {
        path: "inbox",
        element: <InboxLayout />,
        children: [{ index: true, element: <Inbox /> },
      {path:':conversationId',
    element:<Chat />}],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
const authCheck = (routes: Array<TRoutes>) =>
  routes.map((route: TRoutes) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });
export default authCheck(routes);
