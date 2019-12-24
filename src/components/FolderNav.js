import Folder from "@iconscout/react-unicons/icons/uil-folder";
import Rightarrow from "@iconscout/react-unicons/icons/uil-angle-right";
import File from "./File";
import React, { Component } from "react";

export default class FolderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      files: this.props.files
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }
  render() {
    const files = this.state.files.map((file, index) => {
      return <File key={index} name={file.name} />;
    });
    return (
      <>
        <div className="folder">
          <span>
            <Rightarrow
              size="1.5em"
              color="#898989"
              onClick={this.clicked}
              style={{ cursor: "pointer" }}
            />
          </span>
          <Folder size="1.5em" color="#898989" />
          <span
            style={{
              marginLeft: "0.5em",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "-0.6em"
            }}
          >
            {this.props.title}
          </span>
        </div>
        <div className={this.state.opened ? "open" : "closed"}>{files}</div>
      </>
    );
  }
}
