import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div style={{ height: "30px" }}>
        <Link
          className="SidebarLink"
          to={item.path}
          onClick={item.subNav && showSubnav}
        >
          {item.icon}
          <div>{item.title}</div>
        </Link>
        <div style={{ position: "relative", left: "176px", bottom: "28px" }}>
          <div style={{ color: "#cdd3d8" }}>
            {item.subnav && subnav
              ? item.subNav
                ? item.iconOpened
                : null
              : item.iconClosed}
          </div>
        </div>
      </div>

      <ul>
        {subnav &&
          item.subNav.map((item, index) => {
            console.log(item);

            return (
              <Link to={item.path} className="dropdown" key={index}>
                <li>{item.title}</li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default SubMenu;
