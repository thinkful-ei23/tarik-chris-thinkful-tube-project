'use strict';
/* */

const store = (function() {
  const nextPageToken = '';
  const videos = [];
  const setVideos = function(decVideoArr) {
    this.videos = decVideoArr;
  };
  return {
    videos,
    setVideos
  };
}());

