import React from "react";

const DiscoverSuperPower = () => {
  function overlay() {
    document.getElementById("superpower__text").style.display = "block";
    document.getElementById("superpower__card").style.display = "none";
  }
  function overlayRemove() {
    document.getElementById("superpower__text").style.display = "none";
    document.getElementById("superpower__card").style.display = "block";
  }
  return (
    <div className="discover__superpower">
      <h1>Discover your</h1>
      <h1>new superpowers</h1>
      <div className="superpower__cards__wrapper">
        <div
          className="superpower__card"
          id="superpower__card"
          onMouseOver={overlay}
        >
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-01.png?v=1680461635535"
            alt="image"
          />
        </div>
        <div
          className="superpower__text"
          id="superpower__text"
          onMouseLeave={overlayRemove}
        >
          <h4>Present without being there</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quod
            molestias possimus quos, laborum quia corporis ratione accusantium,
            autem dolore officia quibusdam cum corrupti magnam eum saepe illum
            accusamus praesentium.
          </p>
        </div>
        <div className="superpower__card">
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-02.png?v=1680461635535"
            alt="image"
          />
        </div>

        <div className="superpower__card">
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-03.png?v=1680461635535"
            alt="image"
          />
        </div>
        <div className="superpower__card">
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-04.png?v=1680461635535"
            alt="image"
          />
        </div>
        <div className="superpower__card">
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-05.png?v=1680461635535"
            alt="image"
          />
        </div>
        <div className="superpower__card">
          <h4>Present without being there</h4>
          <img
            src="https://overflow.io/assets/public-site-v2/images/card-image-06.png?v=1680461635535"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSuperPower;
