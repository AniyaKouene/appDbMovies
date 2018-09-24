import React from "react";

const IMG_BASE_URl = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = ({ movie }) => {
  return (
    <li className="list-group-item">
      <div className="media">
          <img
            className="align-self-center"
            height="100px"
            width="100px"
            src={`${IMG_BASE_URl}${movie.poster_path}`}
            alt=""
          />

        <div className="media-body">
          <h5 className="title_list_item text-center">{movie.title}</h5>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
