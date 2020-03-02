import React, { Component } from "react";
import "./Contact.scss";
import { Row, Col } from "antd";
import {
  HomeFilled,
  MailFilled,
  PhoneFilled,
  GithubFilled
} from "@ant-design/icons";

export class Contact extends Component {
  render() {
    return (
      <div className="container-contact">
        <div className="title-contact">CONTACT</div>
        <div className="all-icon-contact">
          <Row align="middle" className="each-row-contact">
            <Col span={4} className="icon-contact">
              <HomeFilled className="only-icon" />
            </Col>
            <Col span={20}>
              8/512 Songprapa Road, Donmuang, Donmuang, Bangkok 10210
            </Col>
          </Row>
          <Row align="middle" className="each-row-contact">
            <Col span={4} className="icon-contact">
              <MailFilled className="only-icon" />
            </Col>
            <Col span={20}>boonyanuch.patta@gmail.com</Col>
          </Row>
          <Row align="middle" className="each-row-contact">
            <Col span={4} className="icon-contact">
              <PhoneFilled className="only-icon" />
            </Col>
            <Col span={20}>+66 92 249 9197</Col>
          </Row>
          <Row align="middle" className="each-row-contact">
            <Col span={4} className="icon-contact">
              <GithubFilled className="only-icon" />
            </Col>
            <Col span={20}>https://github.com/earnpat</Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
