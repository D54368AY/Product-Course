import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
/* import { Facebook, Instagram, Printer, Twitch, Twitter } from 'react-bootstrap-icon' */
import * as Icon from 'react-bootstrap-icons';

export class FootSocial extends Component {
  render() {
    return (
      <div className="footer fixed-bottom">
        <Row>
          <Col
            lg={2}
            style={{ background: "Blue", color: "white" }}
            className="text-center"
          >
             <Icon.Facebook/> FACEBOOK
          </Col>
          <Col
            lg={2}
            style={{ background: "red", color: "white" }}
            className="text-center"
          >
             <Icon.Twitter/> TWITTER
          </Col>
          <Col
            lg={4}
            style={{ background: "Pink", color: "white" }}
            className="text-center"
          >
             <Icon.Instagram/> INSTAGRAM
          </Col>
          <Col
            lg={2}
            style={{ background: "purple", color: "white" }}
            className="text-center"
          >
             <Icon.Twitch/> TWITTER
          </Col>
          <Col
            lg={2}
            style={{ background: "red", color: "white" }}
            className="text-center"
          >
            <Icon.Printer/> PINTEREST
          </Col>
        </Row>
      </div>
    );
  }
}

export default FootSocial;
