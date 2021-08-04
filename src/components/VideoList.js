

import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component {

    getvideolist = () => {
        let videolist = this.props.VDlist.map((ids) => {

            return <VideoListItem OnVideoSelect={(selectedVideo) => { this.props.OnVideoSelect(selectedVideo) }} key={ids.etag} videoLists={ids}></VideoListItem>
        })
        return videolist;
    }

    render() {
        return (
            <div>
                <ul style={{ listStyleType: 'none' }}>{this.getvideolist()}</ul>
            </div>
        );
    }
}
export default VideoList;