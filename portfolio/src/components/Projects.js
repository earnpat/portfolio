import React, { Component } from "react";
import "./Projects.scss";
import { Row, Col } from "antd";

export class Projects extends Component {
  render() {
    return (
      <div className="container-projects">
        <div className="title-project">PROJECTS</div>
        <Row>
          <Col xs={24} sm={12} md={8} lg={6} className="each-project-frame">
            <div className="each-project">
              <div>
                - <span className="name-project">Resume</span> -
              </div>
              <div>Personal Project</div>
              <div>[ Pre-Camp CC #4 ]</div>
              <img src="https://www.mx7.com/i/0cc/yHSgtG.jpg" />
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="each-project-frame">
            <div className="each-project">
              <div>
                - <span className="name-project">Lecturely</span> -
              </div>
              <div>Personal Project</div>
              <div>[ Shopping Cart ]</div>
              <img src="https://www.mx7.com/i/131/ptuYuP.jpg" />
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="each-project-frame">
            <div className="each-project">
              <div>
                - <span className="name-project">iPet</span> -
              </div>
              <div>Team Project</div>
              <div>[ Matching Application ]</div>
              <img src="https://www.mx7.com/i/1cd/3zH3yF.jpg" />
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="each-project-frame">
            <div className="each-project">
              <div>
                - <span className="name-project">Portfolio</span> -
              </div>
              <div>Personal Project</div>
              <div>[ My Porfile ]</div>
              <img src="https://www.mx7.com/i/043/96RWVw.jpg" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
