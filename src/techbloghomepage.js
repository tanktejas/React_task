import ract from "react";
import apifortechblog from "./techblogapi.js";

import url from "./techb1.jpg";
import { Link } from "react-router-dom";
import link from "./carddesign.css";
//for card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Data() {
  return (
    <>   
      {apifortechblog.map((item) => {
        return (
          <>
            <div className="card">
              <Card className="cardinner">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={url}
                    alt="web technology"
                  />
                  <CardContent>
                    <p>&#x1F31F; {item.title}</p>

                    <Typography variant="body2" color="text.secondary">
                      {item.Summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div className="actionofcard">
                  <Link to="/webblog">
                    <button>Read Blog</button>
                  </Link>
                  <button>Share</button>
                </div>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Data;
