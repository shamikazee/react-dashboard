import React from "react";
import Avatar from "./Avatar";
export default function Member(props) {
  return (
    <div style={{ padding: "0.1em" }}>
      <Avatar img={props.img} width="2em" color={props.color} />
      <span style={{ float: "right", marginTop: "-1.8em", marginRight: "1em" }}>
        {props.name}
      </span>
    </div>
  );
}
