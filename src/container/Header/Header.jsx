import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        voluptas asperiores doloremque obcaecati dolor! Aperiam vel laudantium
        quasi at, deleniti a assumenda perferendis officia excepturi odio
        necessitatibus, quos ipsam sequi!
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Header Img" />
    </div>
  </div>
);

export default Header;
