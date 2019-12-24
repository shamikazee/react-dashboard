import React from "react";
import Files from "@iconscout/react-unicons/icons/uil-file-blank";

export default function File(props) {
  return (
    <div className="file">
      <Files size="1vw" color="#898989" />
      <span
        style={{
          marginLeft: "1em",
          fontSize: "0.7rem",
          fontWeight: "500",
          width: "1.5em"
        }}
      >
        {props.name}
      </span>
    </div>
  );
}
