import React from "react";
import loading from "./Images/loading.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <div style={{ position: " relative", left: "660px", top: "270px" }}>
        <h3> Dashboard </h3>
        <img style={{ height: "60px" }} src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default Spinner;
