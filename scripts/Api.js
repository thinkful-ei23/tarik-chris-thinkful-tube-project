'use strict';
/* global $ */

const api = (function(){
  const BASE_URL = ' https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyDAVHHn1DQ_fc28Hj4KTJhgagEbLVO1MNY';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      data: {
        part: 'snippet',
        key: API_KEY, 
        q: searchTerm,
        type: 'video'
      },
      dataType: 'json',
      type: 'GET',
      success: function(response) {
        console.log(response);
        const filteredResponse = response.items.map(function(item) {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url
          };
        });
        callback(filteredResponse);
      },
    };
    $.ajax(query);
  };
  return {
    fetchVideos
  };
}());