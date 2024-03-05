import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <main>
      Dashboard<Link to={"/app/preview"}>Preview</Link>
    </main>
  );
};

export default DashboardPage;
