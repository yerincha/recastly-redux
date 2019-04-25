import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {
    <VideoList handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick} videos={props.videos}/>
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

var mapDispatchToProps = (dispatch, state) => {
    return {
        handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
