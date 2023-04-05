import React from "react";

const DemoListing = () => {
  return (
    <div className="demo">
      <div className="watchdemo">
        <span>
          Watch product demo <i className="fa fa-play-circle"></i>
        </span>
      </div>
      <div className="designerIcon">
        <span> Sync your work from design tools </span>
        <img
          src="https://overflow.io/assets/public-site-v2/images/figma.svg?v=1680461635535"
          alt="figma"
        />
        <img
          src="https://overflow.io/assets/public-site-v2/images/sketch.svg?v=1680461635535"
          alt="figma"
        />
        <img
          src="https://overflow.io/assets/public-site-v2/images/xd.svg?v=1680461635535"
          alt="figma"
        />
        <img
          src="https://overflow.io/assets/public-site-v2/images/photoshop.svg?v=1680461635535"
          alt="figma"
        />
      </div>
    </div>
  );
};

export default DemoListing;
