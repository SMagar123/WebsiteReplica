import React from "react";
import "../assets/styles/layouts/bodydescription.css";
import BodyWords from "../components/BodyDescriptionComponents/BodyWords";
import BodyButton from "../components/BodyDescriptionComponents/BodyButton";
const BodyDescription = () => {
  return (
    <div class="body__description">
      <BodyWords />
      <BodyButton />
    </div>
  );
};

export default BodyDescription;
