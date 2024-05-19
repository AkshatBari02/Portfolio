import React from "react";
import { useParams } from "react-router-dom";
import "react-html5video/dist/styles.css";
import { allProjects } from "./data";

function WatchVideo() {
  const { projectId } = useParams();
  const project = allProjects.find((proj) => proj.projectId === projectId);
  console.log(project.video);

  return (
    <div>
      <div className="watch-video-h1"><h1>{project.title}</h1></div>
      <video width="80%" height="50%" controls className="watch-video-cont">
        <source src={project.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default WatchVideo;
