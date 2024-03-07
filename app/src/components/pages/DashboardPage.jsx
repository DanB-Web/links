import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to={"/app/preview"}>Preview</Link>
    </>
  );
};

export default DashboardPage;
