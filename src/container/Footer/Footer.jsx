import React from "react";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53 St, New ork, NY 100019 USA</p>
          <p className="p__opensans"> +1 212-344-1230</p>
          <p className="p__opensans"> +1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="Gericht Logo" />
          <p className="p__opensans">
            <i>
              "You were called to freedom, brothers and sisters, do not let use
              that freedom to do things that gratify you, but instead serve one
              another in love" - Paul , The Apostle - Galatians 5:13
            </i>
          </p>
          <img
            src={images.spoon}
            alt="Spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />

          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">08:00 am - 2:00 am</p>
          <p className="p__opensans">Saturday - Subday</p>
          <p className="p__opensans">08:00 am - 4:00 am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2024 Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
