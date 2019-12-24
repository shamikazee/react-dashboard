import React from "react";

export default function Used(props) {
  let perc = (props.used * 100) / (props.total * 1000);
  perc += "%";
  const styles = {
    backgroundColor: props.color,
    width: perc,
    height: "0.8em",
    boxSizing: "border-box",
    borderRadius: "1em",
    marginLeft: "-0.5em",
    float: "right",
    zIndex: props.index
  };
  return <div style={styles}></div>;
}
