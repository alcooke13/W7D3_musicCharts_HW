import React from "react";
import Header from "../components/Header";
import SongList from "../components/SongList";

const SongsContainer = () =>{

    return (
        <section className="songs-container">
            <Header/>
            <SongList />
        </section>
    );
};

export default SongsContainer;