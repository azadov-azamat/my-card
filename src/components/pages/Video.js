import React from "react";
import {Container} from "reactstrap";
import video from '../videos/video_2021-09-02_04-23-31.mp4'
import {Link} from "react-router-dom";

export default function Video(){
    const style = {
        width: '100%',
        height: '100vh'
    }
    return(
         <div className="cardPage d-flex justify-content-center align-items-center">
             {/*<Link to={'/'}>Back</Link>*/}
             <video autoPlay={true} loop={true} style={{width: '100%', height: '100%'}}>
                 <source src={video}/>
             </video>
         </div>
    )
}
