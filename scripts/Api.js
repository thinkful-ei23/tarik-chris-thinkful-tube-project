'use strict';
/* global $ */

const api = (function(){
  const BASE_URL = ' https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyDAVHHn1DQ_fc28Hj4KTJhgagEbLVO1MNY';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY, 
      q: searchTerm,
    };
    $.getJSON(BASE_URL, query, callback);
  };
  
  return {
    fetchVideos
  };
}());