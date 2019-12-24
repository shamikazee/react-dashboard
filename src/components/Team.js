import DownArrow from "@iconscout/react-unicons/icons/uil-angle-down";
import UpArrow from "@iconscout/react-unicons/icons/uil-angle-up";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import Memeber from "./Member";

import React, { Component } from "react";

export default class Team extends Component {
  constructor() {
    super();

    this.state = {
      opened: false,
      team: [
        {
          name: "Kirstie Watson",
          image: image1,
          color: "#4A7FD3"
        },
        {
          name: "Edward Wilkinson",
          image: image2,
          color: "#7B46A5"
        },
        {
          name: "Carlton Perry",
          image: image3,
          color: "#4AA370"
        }
      ]
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }
  render() {
    let ln = this.state.team.length;
    const memebers = this.state.team.map((member, index) => {
      return (
        <Memeber
          key={index}
          img={member.image}
          color={member.color}
          name={member.name}
        />
      );
    });
    const styles = {
      display: "none"
    };
    return (
      <>
        <div className="team">
          <h3 style={{ fontSize: "1.4rem" }}>Marketing Team</h3>
          <span style={{ fontSize: "0.9rem" }}>{ln} members</span>
          {this.state.opened ? (
            <UpArrow
              size="1.6em"
              color="#c9c9c9"
              style={{ float: "right", marginTop: "-1em" }}
              className="downarrow"
              onClick={this.clicked}
            />
          ) : (
            <DownArrow
              size="1.6em"
              color="#c9c9c9"
              style={{ float: "right", marginTop: "-1em" }}
              className="downarrow"
              onClick={this.clicked}
            />
          )}
        </div>
        <div
          className={this.state.opened ? "" : "closed"}
          style={{ fontSize: "1rem" }}
        >
          {memebers}
        </div>
      </>
    );
  }
}
