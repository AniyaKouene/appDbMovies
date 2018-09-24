import React from 'react';

const BASE_URL_VIDEO = "https://www.youtube.com/embed/";

const Video = ({videoId}) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${BASE_URL_VIDEO}${videoId}`}/>
        </div>
    
);
    }

export default Video;

