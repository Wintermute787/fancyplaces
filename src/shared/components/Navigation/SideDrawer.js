import React from "react";
import "./SideDrawer.css";
import ReactDOM from "react-dom";

const SideDrawer = props => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  //a portal is used here to place the component in the exact place we want it rendered in the HTML file.
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
