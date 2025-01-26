import React from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import img from "../components/Images/img.png";
import { useNavigate, Link } from "react-router-dom";
import {
  bell_icon,
  inbox_icon,
  logout_icon,
  arrowright_icon,
  burger_icon,
  home_icon,
} from "./Commons";

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.clear();
    navigate("/GraphAnalyticsDashboard");
  };

  const sidetest = () => {
    return SidebarData.map((item, index) => {
      return <SubMenu item={item} key={index} />;
    });
  };

 
  return (
    <>
      <div
        style={{
          float: "left",
          width: "250px",
          background: "white",
          height: "160px",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{
              height: "50px",
              width: "50px",
              position: "relative",
              left: "16px",
            }}
            src={img}
            alt="profile photo"
          />
          <div style={{ color: "#97a7b6" }}>

            Nitin Singh <br />
            Software Engineer
          </div>
        </div>
      </div>
      <div className="Nav">
        <div className="start-icons">
          <div style={{ position: "relative", left: "9px" }}>{burger_icon}</div>
          <div>{home_icon}</div>

          <div>{arrowright_icon}</div>
          <div>
            <span>Start</span>
          </div>

          <div>{arrowright_icon}</div>
        </div>

        <div className="icons">
          <div>{bell_icon}</div>
          <div>{inbox_icon}</div>
          <div>
            <Link to={`/`} onClick={logoutHandler}>
              {logout_icon}
            </Link>
          </div>
        </div>
      </div>

      <div className="layout-Sidebar">
        <div
          style={{
            position: "relative",
            bottom: "320px",
            width: "227px",
            height: "257vh",
            top: "12px",
            left: "20px",
          }}
        >
          {sidetest()}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
