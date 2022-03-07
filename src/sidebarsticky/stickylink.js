import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";

function Link() {
  return (
    <>
      <div className="icons">
        <a href=" ">
          <InstagramIcon />
        </a>
        <a href=" ">
          <FacebookIcon />
        </a>
        <a href=" ">
          <TwitterIcon />
        </a>
        <a href=" ">
          <LinkedInIcon />
        </a>
        <a href=" ">
          <WebIcon />
        </a>
      </div>
    </>
  );
}
export default Link;
