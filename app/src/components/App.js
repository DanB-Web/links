import React from "react";
import { RouterProvider as Router } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return <Router router={router} />;
};

export default App;
