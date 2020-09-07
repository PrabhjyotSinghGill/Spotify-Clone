import React from "react";
import "../Views/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../Components/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img>
      <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon} title="Library"></SidebarOption>
      <br></br>
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr></hr>

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name}></SidebarOption>
      ))}
    </div>
  );
}
export default Sidebar;
