import FolderNav from "./FolderNav";

import React, { Component } from "react";

export default class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drive: this.props.drive
    };
  }
  render() {
    const Folders = this.state.drive.folders.map((folder, index) => {
      return <FolderNav key={index} title={folder.name} files={folder.files} />;
    });
    return (
      <div className="storage">
        <h2>Storage</h2>
        <h3
          style={{ color: "#5964ff", fontSize: "1.3rem", marginTop: "1.5em" }}
        >
          My Files
        </h3>
        <div className="foldersnav">{Folders}</div>
        <div className="storage-sections">Shared with me</div>
        <div className="storage-sections">Recent</div>
        <div className="storage-sections">Starred</div>
        <div className="storage-sections">Trash</div>
      </div>
    );
  }
}
