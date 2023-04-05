import React from "react";

const MenuItems = () => {
  return (
    <div className="menu__item">
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
  );
};

export default MenuItems;
