import React from "react";
import More from "@iconscout/react-unicons/icons/uil-ellipsis-h";

function Drive(props) {
  let perc = (props.used * 100) / props.total;
  perc += "%";
  const styles = {
    width: perc
  };
  console.log(props);
  return (
    <div className={props.slug == props.id ? "activedrive" : "drive"}>
      <img src={props.logo} className="drivelogo" />
      <More size="1.6em" color="#A0A0A0" style={{ float: "right" }} />

      <h4 style={{ marginTop: "1em" }}>
        <b>{props.text}</b>
      </h4>
      <div style={{ marginTop: "-0.2em" }}>
        <span style={{ fontSize: "0.9em" }}>{props.used} GB</span>
        <span style={{ float: "right", fontSize: "0.9em" }}>
          {props.total} GB
        </span>
      </div>
      <div className="grey-storage" style={{ marginTop: "1.5em" }}>
        <div className="used" style={styles}></div>
      </div>
    </div>
  );
}
export default Drive;
