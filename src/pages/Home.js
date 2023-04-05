import React from "react";
import Navigation from "../Layouts/Navigation";
import BodyDescription from "../Layouts/BodyDescription";
import VideoDisplay from "../Layouts/VideoDisplay";
import BodyAfterVideo from "../Layouts/BodyAfterVideo";
import Footer from "../Layouts/Footer";

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
