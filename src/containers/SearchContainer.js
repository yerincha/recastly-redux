import React from 'react';
import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = (props) => (
    <Search getYouTubeVideos={props.handleSearchInputChange} handleSearchChange={props.handleSearchChange} video={props.video}/>
);

var mapDispatchToProps = (dispatch) => {
    return {
        handleSearchInputChange: (q) => dispatch(handleVideoSearch(q)),
        handleSearchChange: (e) => dispatch(handleSearchChange(e))
    };
}

var mapStateToProps = (state) => {
    return {
        video: state.video,
        videos: state.videos
    };
}

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);