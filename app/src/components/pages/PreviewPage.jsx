import React from "react";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <>
      <h1>PreviewPage</h1>
      <Link to={"/app"}>Dashboard</Link>
    </>
  );
};

export default PreviewPage;
