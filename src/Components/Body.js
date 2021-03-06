import React from "react";
import "../Views/Body.css";
import Header from "../Components/Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../Components/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt=""></img>
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs ">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle"></PlayCircleFilledIcon>
          <FavoriteIcon fontSize="large"></FavoriteIcon>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        {/*List of Songs*/}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track}></SongRow>
        ))}
      </div>
    </div>
  );
}
export default Body;
