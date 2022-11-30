import React from "react";
import './Song.css'

const Song = ({song, position}) => {
    
    return (
        <li className="single-song">
           {position} - {song.title.label}
        </li>
        
    );
};

export default Song