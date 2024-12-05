import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";
import We from "~/pages/We/We";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/we", element: <We /> },
  ],
};
