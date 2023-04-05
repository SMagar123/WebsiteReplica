import React from "react";
import "../assets/styles/layouts/navigation.css";
import Logo from "../components/NavigationComponents/Logo";
import MenuItems from "../components/NavigationComponents/MenuItems";
import LoginSection from "../components/NavigationComponents/LoginSection";
const Navigation = () => {
  return (
    <div class="navigation">
      <Logo />
      <MenuItems />
      <LoginSection />
    </div>
  );
};

export default Navigation;
