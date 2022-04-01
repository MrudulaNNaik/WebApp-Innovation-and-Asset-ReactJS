import { Avatar, colors } from "@material-ui/core";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Images from "./image";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse row " id="navbarText">
          <ul class="navbar-nav mr-auto row">
            <li class="nav-item active">
              {/* <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png"
                alt="profile"
                style={{ height: "70px", width: " 100px" }}
              />
            </li>
            <div
              className="row "
              style={{ paddingLeft: "550px", paddingTop: "15px" }}
            >
              <li class="nav-item">
                <a class="nav-link" href="/product">
                  <h5>Products</h5>
                </a>
              </li>
              <li class="nav-item" style={{ paddingLeft: "30px" }}>
                <a class="nav-link" href="/scanner">
                  <h5> Q R Code Scanner</h5>
                </a>
              </li>
            </div>

            <div style={{ paddingLeft: "450px" }}>
              <div style={{ paddingLeft: "30px" }}>
                <Avatar>
                  <a class="nav-link" href="/profile">
                    <CgProfile />
                  </a>
                </Avatar>
              </div>
              <h6
                style={{
                  paddingTop: "10px",
                  paddingLeft: "12px",
                  color: "black",
                }}
              >
                Edit Profile
              </h6>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
