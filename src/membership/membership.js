import react from "react";
import "./membership.css";
import Nav from "../nav.js";
import Form from "./formformembership.js";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";

class Member extends react.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="membership">
          <div className="aboutmembership">
            <h1>
              <FiberNewOutlinedIcon />
              ABOUT MEMBERSHIP
            </h1>
            <p>
              &#8658; Welcome to tech-blog. We introduce membership in that you
              will get premium blogs to read.
            </p>
            <p>&#8658; if you want to buy membership then fill below form.</p>
            <p> &#8658; if you want to buy membership then fill below form.</p>
            <p>
              &#8658; Membership helps you better engage and build your
              community. When you get someone to raise their hand and decide to
              participate in your blog (rather than just lurking), you'll
              engender more commitment and fans who are more likely to spread
              the word about your blog.
            </p>
            <p>
              <p>
                <h3>++ Benefit Of Membership ++</h3>
              </p>
              <ul>
                <li>Online Member Community.</li>
                <li>Flexible Online Learning and Certifications.</li>
                <li>Mentoring Programs.</li>
                <li>Members-Only Job Boards.</li>
                <li>Virtual Events.</li>
                <li>Directories.</li>
                <li>Volunteering Programs.</li>
                <li>Exclusive, Industry-Specific Offers.</li>
              </ul>
            </p>
          </div>
          <Form />
        </div>
      </>
    );
  }
}

export default Member;
