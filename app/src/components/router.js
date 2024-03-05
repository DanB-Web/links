import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import Error404Page from "./pages/ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/app",
    element: <DashboardPage />,
  },
  {
    path: "/app/preview",
    element: <PreviewPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);
