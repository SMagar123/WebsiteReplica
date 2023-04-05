import React from "react";
import "../assets/styles/layouts/videodisplay.css";
import Video from "../components/VideoDisplayComponents/Video";
import DemoListing from "../components/VideoDisplayComponents/DemoListing";
const VideoDisplay = () => {
  return (
    <div class="videodisplay">
      <Video />
      <DemoListing />
    </div>
  );
};

export default VideoDisplay;
