'use strict';
/* global $, store */

const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyDAVHHn1DQ_fc28Hj4KTJhgagEbLVO1MNY';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY, 
      q: searchTerm,
      type: 'video'
    };
    $.getJSON(BASE_URL, query, function(response) {
      store.nextPageToken = response.nextPageToken;
      const filteredResponse = response.items.map(function(item) {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url
        };
      });
      callback(filteredResponse);
    });
  };
  return {
    fetchVideos
  };
}());