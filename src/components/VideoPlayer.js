import React from 'react';

class VideoPlayer extends React.Component {
    render() {
        console.log("hey there", this.props.video);
        let v = this.props.video;
        let videoclone = Object.assign({}, v);
        let title = Object.assign({}, videoclone.snippet);
        let v1 = Object.assign({}, videoclone.id);
        //console.log("videoclone is ", v1);
        return (

            <div>
                <div className="ui embed">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${v1.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p>{title.title}</p>
                </div>


            </div>
        )

    }
}
export default VideoPlayer;