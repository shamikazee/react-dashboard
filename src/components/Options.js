import React from "react";
import Folder from "@iconscout/react-unicons/icons/uil-folder";
import Text from "@iconscout/react-unicons/icons/uil-file-alt";
import Presentation from "@iconscout/react-unicons/icons/uil-presentation-play";
import Sheets from "@iconscout/react-unicons/icons/uil-table";
import More from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import Rightarrow from "@iconscout/react-unicons/icons/uil-angle-right";

function Options(props) {
  return (
    <div className={props.opened ? "sidebottom" : "closed"}>
      <div
        style={{
          borderBottom: "solid 0.1em #e5e5e5",
          marginBottom: "0.5em"
        }}
      >
        <Folder size="1.7em" color="#5964ff" style={{ margin: "0.6em" }} />
        <span style={{ margin: "1.2em" }}>Folder</span>
      </div>
      <Text
        size="1.7em"
        color="#5964ff"
        style={{ margin: "0.6em", marginRight: "1.7em" }}
      />
      <span>Text Doc</span>
      <Rightarrow size="1.7em" color="#5964ff" style={{ float: "right" }} />
      <br />
      <Presentation
        size="1.7em"
        color="#5964ff"
        style={{ margin: "0.6em", marginRight: "1.7em" }}
      />
      <span>Presentation</span>
      <Rightarrow size="1.7em" color="#5964ff" style={{ float: "right" }} />
      <br />
      <Sheets
        size="1.7em"
        color="#5964ff"
        style={{ margin: "0.6em", marginRight: "1.7em" }}
      />
      <span>Sheets</span>
      <Rightarrow size="1.7em" color="#5964ff" style={{ float: "right" }} />
      <br />
      <More
        size="1.7em"
        color="#5964ff"
        style={{ margin: "0.6em", marginRight: "1.7em" }}
      />
      <span>More</span>
      <Rightarrow size="1.7em" color="#5964ff" style={{ float: "right" }} />
      <br />
    </div>
  );
}
export default Options;
