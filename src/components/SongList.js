import React from "react";
import Song from "./Song";
import './SongList.css'

const SongList = () => {
    
    
    return (
        <div className="song-list">
            <h3>List of songs:</h3>
            <Song />
            <Song />
            <Song />
        </div>
    );
};

export default SongList;