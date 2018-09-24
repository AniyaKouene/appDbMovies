import React from "react";
import VideoListItem from "../components/VideoListItem";

const VideoList = ({moviesList}) => {
  return (
    <div>
      <ul>
        {moviesList.map(movie => {
          return <VideoListItem key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default VideoList;
