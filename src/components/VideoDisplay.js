import React from "react";
import "../assets/styles/video.css";
const VideoDisplay = () => {
  return (
    <div class="videodisplay">
      <video autoplay>
        <source
          src="https://overflow.io/upload/o/public/home/home-atf-v3-2022.mp4?v=1680461635535"
          type="video/mp4"
        />
      </video>
      <div class="demo">
        <div class="watchdemo">
          <span>
            Watch product demo <i class="fa fa-play-circle"></i>
          </span>
        </div>
        <div class="designerIcon">
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
    </div>
  );
};

export default VideoDisplay;
