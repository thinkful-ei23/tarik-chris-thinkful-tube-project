'use strict';
/* */

const store = (function() {
  let videos = [];
  const setVideos = function(decVideoArr) {
    videos = decVideoArr;
  };
  return {
    videos,
    setVideos
  };
}());

