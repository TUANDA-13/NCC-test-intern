import React from "react";
import News from "../../pages/News";
import Sidebar from "../Sidebar";
import "./style.jsx";
import { StyledMainLayout } from "./style.jsx";
const MainLayout = () => {
  return (
    <StyledMainLayout>
      <div className="main">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="right-layout">
          <div class="content">
            <News></News>
          </div>
          <div className="copyright">Copyright © 2021</div>
        </div>
      </div>
    </StyledMainLayout>
  );
};
export default MainLayout;
