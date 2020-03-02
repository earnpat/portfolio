import React, { Component } from "react";
import "./About.scss";
import { GithubOutlined } from "@ant-design/icons";

export class About extends Component {
  render() {
    return (
      <div className="container-about">
        <img
          className="profile-pic"
          src="https://www.img.in.th/images/defdf9d106b0f58e2f4f1fd764c38ec8.jpg"
          alt="profile picture"
        />
        <div className="profile-name">BOONYANUCH PATTANAPAN</div>
        <div className="profile-position">FULL STACK DEVELOPER</div>
        <div className="profile-skill">
          - HTML | CSS | SCSS | Javascript | React | Ant Design | Boostrap | Figma -
        </div>
        <div className="profile-skill">
          - Javascript | mySQL | Node.js | Express | Sequelize -
        </div>
        <div className="profile-social">
          <a href="https://github.com/earnpat" target="_blank">
            <GithubOutlined className="profile-social-img" />
          </a>
        </div>
        <div className="profile-obj">
          I'm graduated in engineering field who interested in coding and
          technology. I decided to participate in Code Camp #4 Program. I'm sure
          that I can use my knowledge and skills for working in a position in
          coding field. I'm ready and very eager to practice and learn more
          skills.
        </div>
      </div>
    );
  }
}

export default About;
