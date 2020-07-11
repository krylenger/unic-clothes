import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div
        className="logo"
        style={{
          backgroundImage: `url(https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/55818880_411768482969845_6663307284870856704_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=aRJM6sJ6DBcAX_NnTZ9&oh=212780987a5997aedc2d4314516685b0&oe=5F315C31)`,
        }}
      ></div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
