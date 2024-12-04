import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeRoutes } from "./routes/HomeRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const router = createBrowserRouter([HomeRoutes]);

  return <RouterProvider router={router} />;
};

export default App;
