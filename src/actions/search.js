import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {
  //TODO:  Write an asynchronous action to handle a video search!
    // Thunk
  var options = {
    key: YOUTUBE_API_KEY,
    query
  };
  
  return (dispatch) => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos))
      dispatch(changeVideo(videos[0]))
    });
  }

};

// var handleSearchChange = (e) => {
//   return (dispatch) => {
//     console.log(e.target.value);
//     dispatch(handleVideoSearch(e.target.value));
//   }
// }

export default handleVideoSearch;
