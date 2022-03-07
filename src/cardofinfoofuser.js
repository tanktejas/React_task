import react from "react";
import "./about.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
function Card(props) {
  console.log(props.info.pic);
  return (
    <>
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={props.info.pic} alt="user" />
        <h3>{props.info.name}</h3>
        <h6>{props.info.city}</h6>
        <p>
          {props.info.workingarea} <br />
          Competitive Coder
        </p>
        <div class="buttons">
          <a href={props.info.instagram}>
            <InstagramIcon className="ins" />
          </a>
          <a href={props.info.twitter}>
            <TwitterIcon className="twi" />
          </a>
          <a href={props.info.linkedin}>
            <LinkedInIcon className="linked" />
          </a>
          <a href={props.info.github}>
            <GitHubIcon className="git" />
          </a>
        </div>
        <div class="skills">
          <h6>Skills</h6>
          <ul>
            {props.info.skills.map((item) => {
              return (
                <>
                  <li>{item}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
