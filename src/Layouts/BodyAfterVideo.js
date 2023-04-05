import React from "react";
import "../assets/styles/layouts/bodyaftervideo.css";
import creativity from "../assets/images/creativity.jpg";
import {
  ButtonVideo,
  CompanyLogo,
  Creativity,
  DesignStory,
  DiscoverSuperPower,
  StoryView,
  TellDesignStory,
  VideoandParagraph,
  ViewButton,
  WebDesignerSaying,
  WebDesignerWords,
  WowEffect,
} from "../components/BodyAfterVideo";
export const BodyAfterVideo = () => {
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
