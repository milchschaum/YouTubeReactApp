import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return(
    <li onClick={() => onVideoSelected(video)} className="list-group-item">
      <div className="video-list media">
        <div className='media-left video-item'>
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
