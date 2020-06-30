import React from "react";

function Video(props) {
    const ytId = props.ytId
  return (
    <div className="Video">
      <iframe
        width="100%" 
        height="350px"
        title="video"
        src={"https://www.youtube.com/embed/" + ytId }
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Video;
