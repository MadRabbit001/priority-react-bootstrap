import React from 'react';

import youtube from "./DB/Youtube";
import "../Login.css";

let random = Math.trunc(Math.random() * 12);
console.log(random+1);
console.log(youtube[random].link);

function VideoPlayer() {
    return (
        <iframe width="367" height="315" src={youtube[random].link} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>

    );
}

export default VideoPlayer;
