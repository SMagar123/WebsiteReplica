import React from "react";
import {
  Navigation,
  BodyDescription,
  VideoDisplay,
  BodyAfterVideo,
  Footer,
} from "../layouts";
const Home = () => {
  return (
    <>
      <Navigation />
      <BodyDescription />
      <VideoDisplay />
      <BodyAfterVideo />
      <Footer />
    </>
  );
};

export default Home;
