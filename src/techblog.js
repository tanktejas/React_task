import react from "react";
import "./blog.css";
import Nav from "./nav";
import Item from "./item.js";
import Addcomment from "./commrntadd.js";
import Spinnner from "./spinner.js";
import Joinform from "./joinform.js";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
class Blog extends react.Component {
  constructor() {
    super();  
    this.state = {
      flag: false,
      data: [{}],
    };
  }
    
  componentDidMount() {
    setInterval(() => {  
      fetch("http://localhost:3001/datastore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },     
      })
        .then(async (data) => {        
          return await data.json(); 
        })
        .then((res) => {
           
          this.setState({
            flag: true,
            data: res,
          });
        });
    }, 1000);
  }
    
  render() {
    const { data, flag } = this.state;
    if (!flag) {
      return (
        <>
          <Spinnner />
        </>
      );
    }
    return (
      <>
        <Nav />
        <div className="blm">
          <div className="bloghead">
            <div className="innerdivforrattng">
              <div>
                <h2>Web Development</h2>
                <span>3 January 2022</span>
              </div>
              <div>
                <div className="iconforrat">
                  
                </div>
              </div>        
            </div>
            <hr />
            <div className="contentoftech">    
              <p>Hello Fam!</p>
              <p>  
                Hello, I'm tejas. I'm a full stack developer and entrepreneur
                who's started an ice cream business and cookie dough business
                amongst other things. 
              </p>
              <p>
                Probably like you, I'm that person who is constantly coming up
                with lots of little project ideas. Whether that be ideas for
                apps, websites, games, businesses; whatever. I have them all
                stored on a list in my phone, and I know you probably have one
                of those lists too.
              </p>
              <p>
                Not completing any of these ideas comes with a few problems:
              </p>
              <ul>
                <li>The list grows bigger and more daunting</li>
                <li>
                  I feel like a failure because I'm not completing anything
                </li>
                <li>
                  Missing out on exploring cool ideas with massive potential
                </li>
              </ul>
              <p>  
                The goal of this website is to try and explore as many of these
                ideas as I can. I'm not one for new year's resolutions, but I do
                seem to get into a habit of setting goals around my birthday. I
                turned 25 on May 17th 2020, and my goal for my 25th year on
                earth is to try at least one of these tiny project ideas every
                few months and see what happens. If they can make some money
                too, that'd be great.
              </p>
              <p>You can check up on my progress on my projects page.</p>
            </div>
          </div>
          <Joinform />  
        </div>
        {/* //for comments */}
        <div className="commentshead">
          <h1 className="headcomment">Comments</h1>
          {this.state.data.map((ele) => {
            return (
              <Item
                name={ele.name}
                comment={ele.comment}
                ratting={ele.ratting}
              />
            );
          })}
          <Addcomment />
        </div>
      </>
    );
  }
}

export default Blog;
