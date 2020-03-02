import React, { Component } from "react";
import "./Education.scss";
import { Timeline } from "antd";

export class Education extends Component {
  render() {
    return (
      <div className="container-education">
        <div className="title-edu">EDUCATION BACKGROUND & ACTIVITIES</div>
        <div className="timeline-edu">
          <Timeline mode="left">
            <Timeline.Item label="Oct 2019 - Jan 2020">
              Code Camp #4 <br />
              Software Park Thailand <br />
              - Full Stack Developer <br />
            </Timeline.Item>
            <Timeline.Item label="Oct 2018 - Feb 2019">
              Internship <br />
              Thai Airways, Donmuang Airport <br />
              - Aircraft Maintenance <br />
            </Timeline.Item>
            <Timeline.Item label="2015 - 2018">
              Civil Aviation Training Center <br />
              Bachelor of Engineering <br />
              - Aviation Electronic Engineering Program [ AEE ] <br />
            </Timeline.Item>
            <Timeline.Item label="2009 - 2014">
              Nawamintharachinuthit Horwang Nonthaburi School <br />
              - High School [ Science - Math ] <br />
              - Lower Secondary School <br />
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Education;
