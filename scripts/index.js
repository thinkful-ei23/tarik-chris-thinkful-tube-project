'use strict';
/* global $ */

const API_KEY = 'AIzaSyDAVHHn1DQ_fc28Hj4KTJhgagEbLVO1MNY';
const mock_Data = [
  {
    'kind': 'youtube#searchResult',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/NbcBamTEKpbilPfJtQWS7Qb-dkQ"',
    'id': {
      'kind': 'youtube#video',
      'videoId': 'xJJE9j3Z9WE'
    },
    'snippet': {
      'publishedAt': '2018-05-31T21:56:13.000Z',
      'channelId': 'UCn9p8B33nCFWTPCtOKPtKsQ',
      'title': 'Bleach | Ichigo vs Aizen Final Battle | Dub',
      'description': '',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/xJJE9j3Z9WE/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/xJJE9j3Z9WE/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/xJJE9j3Z9WE/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Bleach Battle Dub',
      'liveBroadcastContent': 'none'
    }
  },
  {
    'kind': 'youtube#searchResult',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/RJ7UoL7NVdrU2CxvZ5PiAM8Ot7A"',
    'id': {
      'kind': 'youtube#video',
      'videoId': '_1viNRnum4U'
    },
    'snippet': {
      'publishedAt': '2018-07-23T22:07:45.000Z',
      'channelId': 'UCHXoizN-3WFqqpp9WK0SnNg',
      'title': '3000 ORBES POUR ULQUIORRA DES 3 ANS ! - Bleach Brave Souls',
      'description': 'INVOCATION DES 3 ANS ! Finalement des vidéos seront faits sur ce jeu qui est sorti sur Android et IOS ! J\'espère pouvoir vous replonger dans cet univers riche ...',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/_1viNRnum4U/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/_1viNRnum4U/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/_1viNRnum4U/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Phirrux',
      'liveBroadcastContent': 'none'
    }
  },
  {
    'kind': 'youtube#searchResult',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/GyUw7LuLq5fXTtAXycFRY8o1UvU"',
    'id': {
      'kind': 'youtube#video',
      'videoId': 'rkyt83OV2Bk'
    },
    'snippet': {
      'publishedAt': '2018-07-24T13:00:59.000Z',
      'channelId': 'UC_m3wqQ6zFhlyAj54W5ln9w',
      'title': 'Bleach Brave Souls - Step Up Full Single and Multi #2',
      'description': 'Dessa vez não é brincadeira, é simplesmente minha conta PRINCIPAL, veio ? veio, não veio, ja éra ! não terá volta então bora para o video pois temos uma ...',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/rkyt83OV2Bk/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/rkyt83OV2Bk/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/rkyt83OV2Bk/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Central Bankai',
      'liveBroadcastContent': 'none'
    }
  },
  {
    'kind': 'youtube#searchResult',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bPcoLFYSCMPEKDkRsN8rSQ4Hsys"',
    'id': {
      'kind': 'youtube#video',
      'videoId': '5lHz9w0qFrs'
    },
    'snippet': {
      'publishedAt': '2018-06-25T09:26:04.000Z',
      'channelId': 'UCsdBcsGeLu9vB3clU5d_5fg',
      'title': 'Bleach Episode 271 English Dubbed',
      'description': '',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/5lHz9w0qFrs/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/5lHz9w0qFrs/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/5lHz9w0qFrs/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Alexis Elias',
      'liveBroadcastContent': 'none'
    }
  }
];

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = ' https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: API_KEY, 
    q: searchTerm,
  };
  $.getJSON(BASE_URL, query, callback);
};

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.

const decorateResponse = function(response) {
  return response.map(function(item) {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url
    };
  });
};

const videos = decorateResponse(mock_Data);

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `
    <li data-video-id="${video.id}">
      <h3>${video.title}</h3>
      <a href="https://youtube.com/watch?v=${video.id}"> 
        <img src="${video.thumbnail}" alt="thumbnail for ${video.title}">
      </a>
    </li>
  `;
};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};

addVideosToStore(videos);
console.log(store.videos);

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const renderDOM = store.videos.map(function(video) { return generateVideoItemHtml(video); });
  console.log(renderDOM);
  $('.results').html(renderDOM);
};
render();

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
