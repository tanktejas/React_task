import react from "react";
import "./membership.css";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

class Form extends react.Component {
  constructor() {
    super();
    this.state = {
      lname: "",
      referal: "",
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
              <div className="form ab">
                <h2 className="h2">Membership</h2>
                <p className="mar">Be Member and read premium Blogs 😍.</p>
                <p>Name :</p>
                <input
                  type="text"
                  placeholder="John"
                  value={this.state.lname}
                  onChange={(e) => {
                    this.setState({
                      lname: e.target.value,
                    });
                  }}
                ></input>
                <p>Email:</p>
                <input
                  type="Email"
                  placeholder="abc@gmail.com"
                  value={this.state.lmail}
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
                <p>Referal Code :</p>
                <input
                  type="text"
                  placeholder="Abcd"
                  value={this.state.referal}
                  onChange={(e) => {
                    this.setState({
                      referal: e.target.value,
                    });
                  }}
                ></input>
                <button
                  className="butformem"
                  onClick={() => {
                    fetch("http://localhost:3001/searchuser", {
                      method: "POST",
                      body: JSON.stringify({
                        lmail: this.state.lmail,
                        lpass: this.state.lpass,
                        referral: this.state.referal,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((predi) => {
                        this.setState({
                          is: predi.result,
                        });
                        this.setState({
                          userunv: predi.result == false ? true : false,
                        });
                      });
                  }}
                >
                  Get Membership
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {console.log(this.state.userunv + "aya")} */}
        <Snackbar
          open={this.state.is}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({
              is: false,
            });
          }}
        >
          <MuiAlert elevation={6} variant="filled" severity="success">
            Yeahh, successfully being member !!
          </MuiAlert>
        </Snackbar>
        {/* for alert snackbar  */}
        <Snackbar  
          open={this.state.userunv}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({
              userunv: false,
            });
          }}
        >
          <MuiAlert elevation={6} variant="filled" severity="error">
            Invalid User, please enter valid mail or password or referral code.
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}

export default Form;
