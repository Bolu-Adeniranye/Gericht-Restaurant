import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About</h1>
        <img src={images.spoon} alt="About_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae
          voluptas corporis amet expedita? Consequuntur itaque labore excepturi
          magni nesciunt quibusdam. Accusamus minima voluptatum harum tenetur
          laboriosam dicta eligendi ratione.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="About Knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="About_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae
          voluptas corporis amet expedita? Consequuntur itaque labore excepturi
          magni nesciunt quibusdam. Accusamus minima voluptatum harum tenetur
          laboriosam dicta eligendi ratione.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
