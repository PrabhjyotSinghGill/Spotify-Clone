import React from "react";
import "../Views/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../Components/DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon></SearchIcon>
        <input placeholder="Search for Artists, Songs" type="text"></input>
      </div>

      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
