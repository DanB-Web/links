import React from "react";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <main>
      PreviewPage<Link to={"/app"}>Dashboard</Link>
    </main>
  );
};

export default PreviewPage;
