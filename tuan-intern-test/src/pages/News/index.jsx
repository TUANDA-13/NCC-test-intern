import React from "react";
import Item from "../../components/Item";
import { StyledNews } from "./style";

const News = () => {
  const listImage = ["css-icon 1", "html-icon 1", "url-icon 1"];
  const widthWindow = window.innerWidth;
  console.log(widthWindow)
  return (
    <StyledNews>
      <div>
        <div className="container">
          <div className="logo">
            <img
              src={require("../../assets/images/logoNCC 1.png")}
              alt="LOGO"
            />
          </div>
          <div className="discription">
            <p className="discription-title">Lorem ipsum dolor sit amet</p>
            <p className="discription-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className="list-item">
            {listImage.map((item, index) => 
               (
                <div key={index} style={{ width: widthWindow>1200 ? "30%" : "100%", }}>
                  <Item image={item}></Item>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </StyledNews>
  );
};
export default News;
