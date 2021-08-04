import React from 'react';

class VideoListItem extends React.Component {

    render() {
        var videos_vlt = this.props.videoLists;
        console.log("video_list", videos_vlt);

        return (
            <div>
                <li onClick={() => { this.props.OnVideoSelect(videos_vlt) }}>

                    <div style={{ display: 'flex' }}>
                        <img src={videos_vlt.snippet.thumbnails.default.url} alt=""></img>
                        <div >
                            <h6>{videos_vlt.snippet.title}</h6>
                            {/* <p>{videos_vlt.snippet.description}</p> */}

                        </div>
                    </div>
                </li>
                <br></br>
            </div >
        )

    }

}

export default VideoListItem;