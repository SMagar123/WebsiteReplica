import React from "react";
import Navigation from "../components/Navigation";
import BodyDescription from "../components/BodyDescription";
import VideoDisplay from "../components/VideoDisplay";
import BodyAfterVideo from "../components/BodyAfterVideo";
import Footer from "../components/Footer";

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
