import React from "react";
import "../assets/styles/navigation.css";
const Navigation = () => {
  return (
    <div class="navigation">
      <div class="logo">
        <img
          src="https://overflow.io/assets/public-site-v2/images/logo.svg?v=1680461635535"
          alt="title_logo"
        />
      </div>
      <div class="menu__item">
        <a href="#">
          <select name="products">
            <option value="volvo">Products</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </a>
        <a href="#">Example</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
      </div>
      <div class="loginsection">
        <a href="#">Sign In</a>
        <button>Download for free</button>
      </div>
      <div class="bars__icon">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default Navigation;
