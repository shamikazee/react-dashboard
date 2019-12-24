import Team from "./Team";
import Storage from "./Storage";
import Options from "./Options";
import Plus from "@iconscout/react-unicons/icons/uil-plus";

import React, { Component } from "react";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      drive: this.props.drive
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }
  render() {
    return (
      <div className="sidebar">
        <Team opened="false" />
        <Storage drive={this.state.drive} />
        <Options opened={this.state.opened} />
        <div className="createbtn">
          <button onClick={this.clicked}>
            Create new
            <div className="plus">
              <Plus size="1.2em" />
            </div>
          </button>
        </div>
      </div>
    );
  }
}
