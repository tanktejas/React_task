import react from "react";
import Nav from "./homenav";
import CardOfuser from "./cardofinfoofuser.js";
import urloftejas from "./images/a.jpeg";
import "./aboutus/aboutus.css";
function Aboutus() {
  return (
    <>
      <Nav />
      <div className="aboutmain">
        <h1>About Us</h1>
        <div className="mainforabout">
          <div className="Tejasinfo">
            <CardOfuser
              info={{
                name: "tejas",
                workingarea: "full-stack developer",

                pic: `${urloftejas}`,
                skills: [
                  "Html",
                  "Css",
                  "JavaScript",
                  "react",
                  "Data Structure",
                  "Algorithm",
                  "C++",
                  "Node.js",
                ],
                city: "junagadh",
              }}
            />
          </div>
          <div className="Jaydevinfo">
            <CardOfuser
              info={{
                name: "Jaydev Kalariya",
                workingarea: "full-stack developer",

                pic: `${urloftejas}`,
                skills: [
                  "Html",
                  "Css",
                  "JavaScript",
                  "react",
                  "Data Structure",
                  "Algorithm",
                  "C++",
                  "Node.js",
                ],
                city: "Morbi",
              }}
            />
          </div>
          <div className="website-info">
            <div className="real-info">
              <h1>TECH-BLOG</h1>
              <p>
                Our Website is helpful to those people who are interested to
                know more about technology.
              </p>
              <p>
                We have uploaded and will upload number of tech blog in this
                site. if you're interested in newest technology then read it out
                and give your suggestion in comment section.
              </p>
              <p>
                Make sure give your valuable suggestion to make our site more
                informative.
              </p>
              <p>Github :- url</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
