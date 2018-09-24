import React from "react";

const VideoDetails = ({ title, description }) => {
  return (
    <div className="m-4">
      <h1> {title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default VideoDetails;
