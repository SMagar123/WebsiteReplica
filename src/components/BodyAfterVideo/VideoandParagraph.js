import React from "react";

const VideoandParagraph = ({ image_creativity }) => {
  return (
    <div className="videoandparagraph">
      <div className="imageparagraph">
        <img src={image_creativity} alt="creativity" />
      </div>
      <div className="paragraph">
        <h3>Sync from any design tool</h3>
        <p>
          Bring your designs into Overflow from your favorite design tool in
          seconds. Use them as a base to create beautiful user flows and design
          presentations in minutes. Simply re-sync after each design iteration
          cycle to keep your presentation up to speed.
        </p>
      </div>
    </div>
  );
};

export default VideoandParagraph;
