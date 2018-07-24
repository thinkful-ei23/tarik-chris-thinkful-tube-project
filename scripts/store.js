'use strict';
/* */

const store = (function() {
  const videos = [];
  const setVideos = function(decVideoArr) {
    this.videos = decVideoArr;
  };
  return {
    videos,
    setVideos
  };
}());

