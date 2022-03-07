import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tech from "./Technologyblog";
import WebBlog from "./techblog.js";
import "./App.css";
import React from "react";
import Nav from "./nav.js";
import Footer from "./footer.js";
import Spi from "./spinner";
import About from "./aboutus.js";
import Membership from "./membership/membership.js";
import Loginsign from "./loginsignin.js/Login-Signin.js";
import Allblog from "./AllBlogs/allblog.js";
import Home from "./homepageformainwebsite/homepage.js";
import Linka from "./sidebarsticky/stickylink.js";

class App extends React.Component {
  render() {
    return ( 
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/blogs" element={<Allblog />}></Route>
            <Route exact path="/blogs/Webblog" element={<WebBlog />}></Route>
            <Route exact path="/membership" element={<Membership />}></Route>
            <Route exact path="/aboutus" element={<About />}></Route>
            <Route exact path="/login" element={<Loginsign />}></Route>
          </Routes>
        </Router>
        <Linka />
        <Footer />
      </>
    );
  }
}

export default App;
