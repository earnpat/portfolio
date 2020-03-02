import React, { Component } from "react";
import "./NavBar.scss";

export class NavBar extends Component {
  render() {
    return (
      <div className="container-navbar">
        <div className="btn-navbar">
          <div className="btn-each">
            <span>About</span>
          </div>
          <div className="btn-each">
            <span>Education</span>
          </div>
          <div className="btn-each">
            <span>Projects</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
