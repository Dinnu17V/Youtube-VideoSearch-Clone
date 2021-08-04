import React from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';
import SearchBar from './components/SearchBar';
import _ from 'lodash';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    this.videoSearch('bts fire');
  }

  videoSearch = (term) => {
    let currentstate = this;
    YTSearch({ term: term, key: 'AIzaSyC9KqsJdDDpHbptDi-APhx8fDSsu6LJMz4', num: 20 }, ytcount => {
      console.log(ytcount)
      currentstate.setState({ videos: ytcount, selectedVideo: ytcount[0] });
    })
  }

  render() {
    console.log("in app", this.state.selectedVideo);
    return (

      <div>
        <h2 style={{ textAlign: "center" }}><img style={{ width: '200px', height: '100px', justifyContent: 'center' }} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
        <div className='ui container' style={{ marginTop: '1em' }}>
          <SearchBar OnSearch={_.debounce(term => { this.videoSearch(term) }, 1000)}></SearchBar>


          <div style={{ display: 'flex' }}>
            <VideoPlayer video={this.state.selectedVideo}></VideoPlayer>
            <div>
              <VideoList OnVideoSelect={selectedVideo => { this.setState({ selectedVideo }) }} VDlist={this.state.videos}></VideoList>
            </div>
          </div>

        </div >

      </div >
    );
  }

}
export default App;
