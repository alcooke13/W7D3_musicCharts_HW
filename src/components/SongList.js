import React from "react";
import Song from "./Song";
import './SongList.css'
const SongList = ({songs}) => {
    const songNodes = songs.map((song, index) => {
      return <Song song={song} key={index} position={index + 1}/>
    })

  return (
    <div>
        <ul>
      {songNodes}
        </ul>
  </div>
  )
}


export default SongList;