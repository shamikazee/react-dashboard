import React from "react";
import Images from "@iconscout/react-unicons/icons/uil-scenery";
import Documents from "@iconscout/react-unicons/icons/uil-file-blank";
import Media from "@iconscout/react-unicons/icons/uil-play";
import Other from "@iconscout/react-unicons/icons/uil-minus";
import Unknown from "@iconscout/react-unicons/icons/uil-question-circle";

export default function Type(props) {
  return (
    <div className="type" style={{ display: "flex" }}>
      <div className="icon">
        {props.id == "Images" ? (
          <Images size="1.4em" color={props.color} />
        ) : props.id == "Documents" ? (
          <Documents size="1.4em" color={props.color} />
        ) : props.id == "Media" ? (
          <Media size="1.4em" color={props.color} />
        ) : props.id == "Other" ? (
          <Other size="1.4em" color={props.color} />
        ) : props.id == "Unknown" ? (
          <Unknown size="1.4em" color={props.color} />
        ) : (
          <Images size="1.4em" color={props.color} />
        )}
      </div>
      <div style={{ width: "100%", marginLeft: "1.3em" }}>
        <span style={{ fontSize: "0.9rem" }}> {props.type} </span>
        <span
          style={{
            fontSize: "1rem",
            float: "right",
            fontWeight: "700",
            color: "#5964ff"
          }}
        >
          {props.size >= 1000 ? props.size / 1000 + " GB" : props.size + " MB"}
        </span>
        <br />
        <span style={{ color: "#898989", marginTop: "2em" }}>
          {props.files} files
        </span>
      </div>
    </div>
  );
}
