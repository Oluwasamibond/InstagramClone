import React from "react";
import "./Homepage.css";
import Timeline from "./Timeline/Timeline";
import Sidenav from "./Navigation/Sidenav";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
