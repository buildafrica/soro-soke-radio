import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



export default function Temp() {
    return (
        <div>
            <AudioPlayer
                autoPlay
                src="https://s4.radio.co/s99d55c85b/listen"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    )
}