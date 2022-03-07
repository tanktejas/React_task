// import { json } from "body-parser";
import react from "react";
import "./joinform.css";
import CustomizedSnackbars from "./alert";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

class Joinform extends react.Component {
  constructor() {
    super();
    this.state = {
      sname: "",
      smail: "",
      spass: "",
      lmail: "",
      lpass: "",
      is: false,
      userunv: false,
    };
  }

  render() {
    return (
      <>
        <div className="amainforboth">
          <div className="formforjoining">
            <div className="mainbox">
              <div className="form">
                <h2>Sign In (New User)</h2> 
                <p>want to receive latest Blogs Awesome Articles 😍</p>
                <p>Name:</p>
                <input
                  placeholder="John"
                  type="text"
                  value={this.state.sname}
                  onChange={(e) => {
                    this.setState({
                      sname: e.target.value,
                    });
                  }}
                ></input>
                <p>Email:</p>
                <input
                  type="Email"
                  placeholder="abc@gmail.com"
                  value={this.state.smail}
                  onChange={(e) => {
                    this.setState({
                      smail: e.target.value,
                    });
                  }}
                ></input>
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={this.state.spass}
                  onChange={(e) => {
                    this.setState({
                      spass: e.target.value,
                    });
                  }}
                ></input>
                <button
                  onClick={() => {
                    fetch("http://localhost:3001/joinuser", {
                      method: "POST",
                      body: JSON.stringify({
                        sname: this.state.sname,
                        smail: this.state.smail,
                        spass: this.state.spass,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    });
                  }}
                >
                  Join With Us
                </button>
              </div>
            </div>
          </div>
          <div className="formforjoining">
            <div className="mainbox">
              <div className="form">
                <h2 className="h2">Log in (if already user)</h2>
                <p className="mar">
                  Type your name, E-mail and login successfully 😍
                </p>

                <p>Email:</p>
                <input
                  type="Email" 
                  placeholder="abc@gmail.com"
                  value={this.state.lname}
                  onChange={(e) => {
                    this.setState({
                      lmail: e.target.value,
                    });
                  }}
                ></input>
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={this.state.lpass}
                  onChange={(e) => {
                    this.setState({
                      lpass: e.target.value,
                    });
                  }}
                ></input>
                <button
                  onClick={() => {
                    fetch("http://localhost:3001/searchuser", {
                      method: "POST",
                      body: JSON.stringify({
                        lmail: this.state.lmail,
                        lpass: this.state.lpass,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((predi) => {
                        console.log(predi);
                        this.setState({
                          is: predi.result == true ? true : false,
                        });
                        this.setState({
                          userunv: predi.result == false ? true : false,
                        });
                        console.log(this.state.userunv);
                      });
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          open={this.state.is}
          autoHideDuration={2000}
          onClose={() => {
            this.setState({
              is: false,
            });
          }}
        >
          <MuiAlert elevation={6} variant="filled" severity="success">
            Yeahh, successfully Login !!
          </MuiAlert>
        </Snackbar>
        {/* for alert   */}
        <Snackbar
          open={this.state.userunv}
          autoHideDuration={2000}
          onClose={() => {
            this.setState({
              userunv: false,
            });
          }}
        >
          <MuiAlert elevation={6} variant="filled" severity="error">
            Invalid User, please enter valid mail or password.
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}

export default Joinform;
