import React from "react";
import Copy from "@iconscout/react-unicons/icons/uil-copy";
import Message from "@iconscout/react-unicons/icons/uil-comment";
import Profil from "@iconscout/react-unicons/icons/uil-user";
import Statistics from "@iconscout/react-unicons/icons/uil-chart-bar";
import Settings from "@iconscout/react-unicons/icons/uil-cog";
import img from "../images/1.jpg";
import Avatar from "./Avatar";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="logo">
        <div className="circle"></div>
      </div>
      <div className="navbtns">
        <div className="navbtn navbtnActive">
          <Copy size="1.6em" color="#F9F9F9" />
        </div>
        <div className="navbtn ">
          <Message size="1.6em" color="#F9F9F9" />
        </div>

        <div className="navbtn ">
          <Profil size="1.6em" color="#F9F9F9" />
        </div>
        <div className="navbtn ">
          <Statistics size="1.6em" color="#F9F9F9" />
        </div>
        <div className="navbtn ">
          <Settings size="1.6em" color="#F9F9F9" />
        </div>
      </div>
      <div className="avatar">
        <Avatar img={img} width="3em" />
      </div>
    </div>
  );
}

export default SideNav;
