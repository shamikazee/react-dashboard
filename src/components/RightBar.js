import React, { Component } from "react";
import Used from "./Used";
import Type from "./Type";
import upgradeimg from "../images/upgrade.JPG";
export default class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drive: this.props.drive
    };
  }
  render() {
    let i = 4;
    let obj = [...this.state.drive.types];
    obj.sort((a, b) => b.size - a.size);
    obj = obj.slice(0, 3);
    const used = obj.map((use, index) => {
      return (
        <Used
          key={index}
          used={use.size}
          total={this.state.drive.total}
          color={use.color}
          index={i--}
        />
      );
    });

    const types = this.state.drive.types.map((type, index) => {
      return (
        <Type
          key={index}
          id={type.id}
          color={type.color}
          type={type.type}
          size={type.size}
          files={type.files}
        />
      );
    });
    return (
      <div className="rightbar">
        <div style={{ paddingTop: "1.8em", paddingRight: "1.8em" }}>
          <span className="capacity" style={{ color: "#5964ff" }}>
            {this.state.drive.used} GB
          </span>
          <span
            className="capacity"
            style={{ float: "right", color: "#898989" }}
          >
            {this.state.drive.total} GB
          </span>
          <div style={{ marginTop: "1em", fontSize: "0.9rem" }}>
            <span style={{ color: "#898989" }}>Used</span>
            <span style={{ float: "right", color: "#5964ff" }}>Upgrade</span>
          </div>
          <div className="greystr" style={{ display: "flex" }}>
            {used}
          </div>
          <div className="tytpe">{types}</div>
        </div>
        <div className="upgrade">
          <img src={upgradeimg} width="80%" />
          <br />
          <h3
            style={{ color: "#1b2359", fontSize: "1.6rem", marginTop: "0.5em" }}
          >
            Upgrade account!
          </h3>
          <br />
          <p
            style={{
              color: "#969696",
              width: "16em",
              margin: "auto",
              fontSize: "0.9em"
            }}
          >
            5 integrations, 30 team members, advanced features for teams
          </p>
          <button className="upgradebtn"> Upgrade</button>
        </div>
      </div>
    );
  }
}
