import React from 'react';

const IMG_BASE_URl = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = ({movie}) => {
  return (
    <div>
      <li>
        <img height="100px" width="100px" src={`${IMG_BASE_URl}${movie.poster_path}`} alt=""/>
      <h3>{movie.title}</h3>
      </li>
    </div>
  );
};

export default VideoListItem;
