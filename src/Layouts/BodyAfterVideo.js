import React from "react";
import "../assets/styles/layouts/bodyaftervideo.css";
import creativity from "../assets/images/creativity.jpg";
import CompanyLogo from "../components/BodyAfterVideo/CompanyLogo";
import DesignStory from "../components/BodyAfterVideo/DesignStory";
import ViewButton from "../components/BodyAfterVideo/ViewButton";
import ButtonVideo from "../components/BodyAfterVideo/ButtonVideo";
import StoryView from "../components/BodyAfterVideo/StoryView";
import Creativity from "../components/BodyAfterVideo/Creativity";
import VideoandParagraph from "../components/BodyAfterVideo/VideoandParagraph";
import TellDesignStory from "../components/BodyAfterVideo/TellDesignStory";
import DiscoverSuperPower from "../components/BodyAfterVideo/DiscoverSuperPower";
import WebDesignerSaying from "../components/BodyAfterVideo/WebDesignerSaying";
import WebDesignerWords from "../components/BodyAfterVideo/WebDesignerWords";
import WowEffect from "../components/BodyAfterVideo/WowEffect";
const BodyAfterVideo = () => {
  const companyLogo = [
    "https://overflow.io/assets/public-site-v2/images/customers/amazon.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/netflix.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/spotify.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/microsoft.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/facebook.svg?v=1680461635535",
  ];

  return (
    <div className="bodyaftervideo">
      <CompanyLogo companylogolist={companyLogo} />
      <DesignStory />
      <ViewButton />
      <ButtonVideo />
      <StoryView />
      <Creativity />
      <VideoandParagraph image_creativity={creativity} />
      <TellDesignStory />
      <DiscoverSuperPower />
      <WebDesignerSaying />
      <WebDesignerWords />
      <WowEffect />
    </div>
  );
};

export default BodyAfterVideo;
