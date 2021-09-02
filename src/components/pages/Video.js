import React from "react";
import video from '../videos/video_2021-09-02_04-23-31.mp4'

export default function Video() {
    const style = {
        width: '100%',
        height: '100%'
    }
    return (
        <div className="cardPage d-flex justify-content-center align-items-center">
            <video muted={true} autoPlay={true} loop={true} style={style}>
                <source src={video}/>
            </video>
        </div>
    )
}
