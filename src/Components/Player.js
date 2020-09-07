import React from "react";
import "../Views/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body ">
        <Sidebar></Sidebar>
        <Body spotify={spotify}></Body>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Player;
