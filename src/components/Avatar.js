import React from "react";

function Avatar(props) {
  let clr = "solid 0.1vw";
  clr += props.color;
  const styles = {
    width: props.width,
    height: "auto",
    borderRadius: "50%",
    border: clr
  };
  return (
    <div>
      <img src={props.img} style={styles} className="avatarimg" />
    </div>
  );
}
export default Avatar;
