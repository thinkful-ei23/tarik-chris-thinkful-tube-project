'use strict';
/* global $, store, api */

const videolist = (function() {
  const generateListItem = function(video) {
    return `
          <li data-video-id="${video.id}">
            <h3>${video.title}</h3>
            <a href="https://youtube.com/watch?v=${video.id}"> 
              <img src="${video.thumbnail}" alt="thumbnail for ${video.title}">
            </a>
          </li>
        `;
  };
  const render = function() {
    const html = store.videos.map(video => {
      generateListItem(video);
    });
    $('.results').html(html);
  };

  const handleFormSubmit = function() {
    $('.js-search-form').submit(event => {
      event.preventDefault;
      const searchVal = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(searchVal, function(response) {
        store.setVideos();
      });
    });
  };

  return {
    render,
  };
}());