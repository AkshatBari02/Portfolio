import React from "react";
import { useParams } from "react-router-dom";

function WatchVideo() {
  const { projectId } = useParams();


  return (
    <div>
      <h1>hello</h1>
      <video class="w-100" autoplay loop muted>
        <source
          src="https://mdbootstrap.com/img/video/animation-intro.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default WatchVideo;
