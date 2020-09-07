import React from "react";
import "../Views/Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://pbs.twimg.com/profile_images/1226991892857884672/70shiuOh_400x400.jpg"
          alt=""
        ></img>
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green"></ShuffleIcon>
        <SkipPreviousIcon className="footer_icon"></SkipPreviousIcon>
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer_icon"
        ></PlayCircleOutlineOutlinedIcon>
        <SkipNextIcon className="footer_icon"></SkipNextIcon>
        <RepeatIcon className="footer_green"></RepeatIcon>
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer_icon"></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer_icon"></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
