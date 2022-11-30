import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SongList from "../components/SongList";
import './SongsContainer.css'

const SongsContainer = () =>{

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
      }, [])

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
    };

    return (
        <section className="songs-container">
            <Header/>
            <SongList songs={songs}/>
        </section>
    );
};

export default SongsContainer;