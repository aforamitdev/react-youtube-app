import React from "react";
import Videoitem from "./Videoitem";
function VideoList({ videos, onVideoSelect }) {
  const renderList = videos.map(video => {
    return (
      <Videoitem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
}
export default VideoList;
