import img from "../images/1.jpg";
import Folder from "@iconscout/react-unicons/icons/uil-folder";
import Avatar from "./Avatar";

import React, { Component } from "react";

export default class FolderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members
    };
  }
  render() {
    const members = this.state.members.map((member, index) => {
      return (
        <div
          style={{ float: "right", marginTop: "-0.8em", marginLeft: "-1.5em" }}
        >
          <Avatar
            key={index}
            img={member.image}
            width="2em"
            color={member.color}
          />
        </div>
      );
    });
    return (
      <div className="folderdetail">
        <Folder size="2.3em" color="#6a73ff" />
        {members}

        <h4>
          <b>{this.props.name}</b>
        </h4>
        <span
          style={{ color: "#999898", fontSize: "0.9em", marginTop: "0.5em" }}
        >
          {this.props.filescount} Files
        </span>
      </div>
    );
  }
}
