import React from "react";
import "./style.jsx";
import { StyledItem } from "./style.jsx";
const Item = ({ image = "logoNCC 1" }) => {
  return (
    <StyledItem>
      <div className="item">
        <div className="title">Lorem ipsum dolor sit amet</div>
        <div className="card">
          {/* <image></image> */}
          <img
            src={require(`../../assets/images/${image}.png`)}
            alt="LOGO"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at
          </p>
        </div>
        <p>
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </StyledItem>
  );
};
export default Item;
