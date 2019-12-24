import React from "react";
import More from "@iconscout/react-unicons/icons/uil-ellipsis-h";

export default function FileNav(props) {
  const styles = {
    backgroundColor: props.color,
    marginRight: "1.6em",
    marginLeft: "1em"
  };
  return (
    <tr style={{ fontSize: "1rem", height: "4.5em" }} className="filenav">
      <td>
        <div style={{ display: "flex" }}>
          <div className="extension" style={styles}>
            {props.format}
          </div>
          <div className="first-td">{props.name}</div>
        </div>
      </td>
      <td style={{ color: "#898989" }}>
        {props.members == 1 ? "Only You" : props.members + " members"}
      </td>
      <td style={{ color: "#898989" }}> {props.date} </td>
      <td>
        <More size="1.6vw" color="#A0A0A0" />
      </td>
    </tr>
  );
}
