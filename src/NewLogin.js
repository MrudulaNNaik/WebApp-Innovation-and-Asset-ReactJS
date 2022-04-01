import React, { useState } from "react";
import firebase from "./firebase1";
import { useNavigate } from "react-router-dom";
import "./NewLogin.css";
import fireDb from "./firebase1";
const Login = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("contacts");
    const todo = {
      mynumber,
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  let navigate = useNavigate();

  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    firebase
      .auth()
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("OTP sent");
        setshow(true);
      })

      .catch((err) => {
        alert(err);

        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        alert("User Verified");
        navigate("/product");

        console.log("authenticated");
      })
      .catch((err) => {
        console.log("not authenticated");
        alert("Incorrect Pin");
      });
  };

  return (
    <div>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <div className="cards">
            <div className="mains">
              <div className="sub-main">
                <div>
                  <div>
                    <div className="imgs">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png"
                        alt="profile"
                        className="profile"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="id">Universal ID</h1>
                  </div>
                  <div>
                    <h6 className="name">Username</h6>
                    <input
                      style={{ marginRight: "50px", height: "50px" }}
                      type="text"
                      placeholder="Enter Username"
                      onChange={handleOnChange}
                      value={title}
                    />
                  </div>
                  <div>
                    <h6 className="name">Enter Phone Number</h6>
                    <input
                      style={{ marginRight: "50px", height: "50px" }}
                      value={mynumber}
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                      placeholder="Enter Phone Number"
                    />
                    <div id="recaptcha-container"></div>
                    <div>
                      <input
                        type="button"
                        className="button"
                        onClick={signin}
                        value="Send OTP"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <div className="cards">
            <div className="mains">
              <div className="sub-main">
                <div>
                  <h6 className="name">Enter OTP</h6>
                  <input
                    style={{ marginRight: "50px", height: "50px" }}
                    type="text"
                    placeholder={"Enter your OTP"}
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                  ></input>

                  <div onClick={createTodo}>
                    <input
                      type="button"
                      className="button"
                      //onClick={() => navigate("/product")}
                      onClick={ValidateOtp}
                      value="Verify OTP"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
