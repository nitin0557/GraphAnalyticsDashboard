import React from "react";
import Progressbar from "./Progressbar";
import Progressbar2 from "./Progressbar2";
import Progressbar3 from "./Progressbar3";
import Progressbar4 from "./Progressbar4";
import Progressbar5 from "./Progressbar5";

const CardsContainer = () => {
  return (
    <>
      <div className="layout-container">
        <Progressbar />
        <Progressbar2 />
        <div className="cards">
          <Progressbar3 />
          <Progressbar4 />
          <Progressbar5 />
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
