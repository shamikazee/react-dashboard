import Search from "@iconscout/react-unicons/icons/uil-search";
import Drive from "./Drive";
import FolderDetail from "./FolderDetail";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import FileNav from "./FileNav";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drive: this.props.drive,
      drives: this.props.drives
    };
  }
  ref() {
    window.location.reload();
  }
  render() {
    const Drives = this.state.drives.map((drive, index) => {
      return (
        <div class="" style={{ margin: "0", padding: "0" }}>
          <Link
            to={`/${drive.id}`}
            onClick={() => (window.location.href = `/${drive.id}`)}
            className="drivelnk"
          >
            <Drive
              key={index}
              logo={drive.logo}
              text={drive.name}
              used={drive.used}
              total={drive.total}
              slug={this.props.slug}
              id={drive.id}
            />
          </Link>
        </div>
      );
    });

    const folders = this.state.drive.folders
      .slice(0, 3)
      .map((folder, index) => {
        let ln = folder.files.length;
        return (
          <div class="" style={{ margin: "0", padding: "0" }}>
            <FolderDetail
              key={index}
              members={folder.members}
              name={folder.name}
              filescount={ln}
            />
          </div>
        );
      });
    const folder = this.state.drive.folders.find(
      folder => folder.name == "Analytics"
    );
    const files = folder.files.map((file, index) => {
      let color = "";
      if (file.format == "PDF") {
        color = "#FF685F";
      } else if (file.format == "DOC") {
        color = "#6394FE";
      } else if (file.format == "ZIP") {
        color = "#FBC12E";
      }
      return (
        <FileNav
          name={file.name}
          members={file.members}
          date={file.date}
          format={file.format}
          color={color}
        />
      );
    });

    return (
      <div className="content">
        <div className="search">
          <Search
            size="1.3rem"
            color="#5964ff"
            style={{ margin: "auto 2rem" }}
          />
          <input className="searchinput" placeholder="Search the files" />
        </div>
        <div class="row justify-content-center">{Drives}</div>

        <h2
          style={{ marginLeft: "0.2vw", marginTop: "1em", fontSize: "1.8vw" }}
        >
          <b>Folders</b>
        </h2>
        <br />
        <div class="row justify-content-center">{folders}</div>
        <h2
          style={{ marginLeft: "0.2em", marginTop: "1em", fontSize: "1.8vw" }}
        >
          <b>Recent Files</b>
        </h2>
        <br />
        <div class="row justify-content-center">
          <table>
            <tr style={{ height: "4.5em", fontSize: "0.9em" }}>
              <td
                style={{ width: "24em", color: "#898989", paddingLeft: "1em" }}
              >
                <b>Name</b>
              </td>
              <td style={{ width: "12em", color: "#898989" }}>
                <b>Members</b>
              </td>
              <td style={{ width: "10em", color: "#898989" }}>
                <b>Last modified</b>
              </td>
              <td style={{ width: "3em", color: "#898989" }}></td>
            </tr>
            {files}
          </table>
        </div>
      </div>
    );
  }
}
