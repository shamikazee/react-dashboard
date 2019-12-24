import Menu from "@iconscout/react-unicons/icons/uil-hdd";
import Close from "@iconscout/react-unicons/icons/uil-multiply";
import React, { Component } from "react";
import RightBar from "./RightBar";

export default class RightMobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  handleTogle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
    let element = document.getElementById("front");
    this.state.isOpen
      ? (element.style.display = "none")
      : (element.style.display = "block");
  };
  render() {
    return (
      <div className="leftnav-mobile">
        <div style={{ width: "5em" }}>
          <Menu
            size="2em"
            color="white"
            onClick={this.handleTogle}
            style={{ cursor: "pointer", margin: "1em" }}
          />
          <div
            style={
              this.state.isOpen
                ? {
                    display: "flex",
                    backgroundColor: "white",
                    width: "20em",
                    height: "100%",
                    position: "fixed",
                    zIndex: "4",
                    top: "0",
                    right: "0",
                    overflowX: "hidden",
                    transition: "1s",
                    paddingTop: "1em"
                  }
                : { width: "0" }
            }
          >
            {this.state.isOpen ? (
              <div className="w3-animate-right">
                <Close
                  size="1.5em"
                  color="black"
                  onClick={this.handleTogle}
                  style={{ cursor: "pointer" }}
                />
                <RightBar drive={this.props.drive} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
