import React, { useState } from "react";
import "./allblog.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShareIcon from "@material-ui/icons/Share";

function Blogtitle(props) {
  const [classn, setStyle] = useState(props.classn);
  return (
    <>
      <div className="blg">
        <div className={classn}></div>
        <div className="blogcont">
          <Link to={props.path}>
            <h2>{props.blgname}</h2>
          </Link>
          <p>{props.t1}</p>
          <p>
            &#10024; &#127775; &#10024; if you want to see more blog related
            this topic click on title.
          </p>
          <p>
            Written by : <a href="#">{props.author}</a>
          </p>
          <p>
            More Info : <a href={props.linkforref}>{props.contref}</a>
          </p>
          <p>
            likes: <span>{props.likes}</span>
          </p>
          <Link to={props.path}>
            <button>{props.onestbutname}</button>
          </Link>
          <a href="https://www.linkedin.com/">
            <button>
              Share <ShareIcon className="icc" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogtitle;
