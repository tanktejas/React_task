import react from "react";
//for navbar
import Nav from "./homenav";
import Joinform from "./joinform.js";
import Data from "./techbloghomepage";
import url from "./techb1.jpg";
import { Link } from "react-router-dom";

// for css
import "./techblog.css";

// for card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Tech extends react.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="mainfordis">
          <div className="main2">
            <Data />
          </div>
        </div>
      </>
    );
  }
}

export default Tech;
