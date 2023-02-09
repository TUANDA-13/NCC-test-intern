import React from "react";
import { StyledSidebar } from "./style";
const Sidebar = () => {
  const menu = ["Home", "Service", "News", "Blog", "Contact"];
  return (
    <StyledSidebar>
      <div className="sidebar">
        <div className="toggle">...</div>
        <div className="container">
          {menu.map((element, index) => (
            <div className="menu-item" key={index}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </StyledSidebar>
  );
};
export default Sidebar;
