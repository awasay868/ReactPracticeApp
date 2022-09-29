import React from "react";

const VideoDetail = ({SelectedVideo}) =>{
    if(!SelectedVideo){
        return <div>Search For Your result</div>

       
    }

    const VideoSrc = `https://www.youtube.com/embed/${SelectedVideo.id.videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title="Youtube Player" src={VideoSrc} />
                
            </div>

        <div className="ui segment">
            <h4 className="ui header">{SelectedVideo.snippet.title}</h4>
            <p>{SelectedVideo.snippet.description}</p>

        </div>
        </div>
    );




}
export default VideoDetail;