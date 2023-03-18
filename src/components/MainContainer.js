import React from "react";
import CardsContainer from "./Card";
import Sidebar from "./Sidebar";
import Icons from "./Icons";

const MainContainer = ({loading}) => {
  
  //  console.log("check",check)

  
   
 
  return (
    <>
    
      <div className="home">Report  </div>

      <Sidebar />
      <CardsContainer />
  
    </>
  );
};
export default MainContainer;
