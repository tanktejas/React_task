import React from "react";
import "./home.css";
import url from "../images/tech.jfif";
import HomeNav from "../homenav.js";
import App from "./chart.js";

function Home() {
  return (
    <>
      <HomeNav />
      <div className="home">
        <div className="header">
          <div className="cont">  
            <h1>Find best posts and trending posts</h1>
            <p>
              <b>This contains tranding blog and posts.</b>
            </p>
            <p>Ranked by machines, curated by humans, updated hourly.</p>
          </div>
          <div className="img">
            <img src={url}></img>
          </div>
        </div>
        <div>
          {/* tranding topics  */}
          <div className="tranding-topics">
            <h1>TRANDING TOPICS</h1>
            <div className="topics">
              <div className="t1">
                <div className="q">
                  <i class="fab fa-js"></i>
                  <span>Javascript</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fab fa-node"></i>
                  <span>NodeJs</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fab fa-react"></i>
                  <span>React</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fa fa-browser"></i>
                  <span>Web Technology</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fad fa-head-side-brain"></i>
                  <span>Machine Learning</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fad fa-robot"></i>
                  <span>AI</span>
                  <div className="rric">
                    <i class="fad fa-chart-line-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* EXPLORE BLOGS BY CATEGORY */}
        <div className="tranding-topics">
            <h1>EXPLORE TOPICS BY TAG</h1>
            <div className="topics">
              <div className="t1">
                <div className="q">
                  <i class="fa fa-browser"></i>
                  <span>Web Devlopment</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q"> 
                <i class="fad fa-head-side-brain"></i>
                  <span>Machine Learning</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                <i class="fad fa-mobile"></i>
                  <span>Ai</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fa fa-code"></i>
                  <span>Coding</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fad fa-camera"></i>
                  <span>Tech. Facts</span>
                  <div className="rric">
                    <i class="fad fa-chart-line"></i>
                  </div>
                </div>
                <div className="q">
                  <i class="fad fa-robot"></i>
                  <span>Others</span>
                  <div className="rric">
                    <i class="fad fa-chart-line-down"></i>
                  </div>
                </div>
  
              </div>
            </div>
           </div>
        <div className="explo">
        <div className="total-amount">
          <h1>Total Topics</h1> 
        </div> 
          <App />
        </div> 
     </div>
    </>
  );
} 
export default Home;
