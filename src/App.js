import React from "react";
import tblogo from "./tybenzlogotransparent.png";
import atslogo from "./ats-logo.png";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-box">
          <img src={tblogo} className="App-logo" alt="Ty Benz logo" />
          <p>
            Tyler Benz, Director/Producer/Co-Founder - All The Smoke Pictures
          </p>
          <img src={atslogo} className="Ats-logo" alt="All The Smoke logo" />
        </div>
      </header>
      <div className="Media-wrapper">
        <div className="Media-container">
          <Video id="vid01" ytId="BYXXs8PGYsY" />
          <Video id="vid02" ytId="tqMD4_PJVKw" />
          <Video id="vid03" ytId="85rsnDrvsGQ" />
          <Video id="vid04" ytId="WO-jOWpwkk4" />
          <Video id="vid05" ytId="m0PN6OTEPCA" />
          <Video id="vid06" ytId="QVU1vUNT2QY" />
          <Video id="vid07" ytId="mF3giSUBe84" />
          <Video id="vid08" ytId="MQzW2pH_C-A" />
          <Video id="vid09" ytId="9inAXIBczBo" />
          <Video id="vid10" ytId="XucF4r4nn6U" />
          <Video id="vid11" ytId="PCAud7oqvZQ" />
          <Video id="vid12" ytId="8W9wUtDHR6M" />
          <Video id="vid13" ytId="wh-QcK8xdXA" />
          <Video id="vid14" ytId="2aBtHYgfsMw" />
          <Video id="vid15" ytId="63UganSCnXU" />
          <Video id="vid16" ytId="mpzEQfc0iY8" />
          <Video id="vid17" ytId="WDvMWu_cMg8" />
          <Video id="vid18" ytId="rBRUXenAVKc" />
          <Video id="vid19" ytId="JlE3BpBMIz4" />
          <Video id="vid20" ytId="rr7rC-2Nb2A" />
          <Video id="vid21" ytId="8FMp0Iu9Euw" />
          <Video id="vid22" ytId="u9L8z4B87dE" />
          <Video id="vid23" ytId="Z-iApuXDak4" />
          <Video id="vid24" ytId="KDCYzZJdOh0" />
          <Video id="vid25" ytId="bcndCSlfvSc" />
          <Video id="vid26" ytId="hUpdLvm-SF4" />
          <Video id="vid27" ytId="MCHHA_5X0VY" />
          <Video id="vid28" ytId="orjqmGye9ag" />
          <Video id="vid29" ytId="tG7wLK4aAOE" />
          <Video id="vid30" ytId="lOa7BVsobvM" />
          <Video id="vid31" ytId="-paB61LOOvY" />
          <Video id="vid32" ytId="un3vVJcadlQ" />
          <Video id="vid33" ytId="Sw6UPV2sM9M" />
          <Video id="vid34" ytId="nsT71j8I24Q" />
          <Video id="vid35" ytId="MS3GVHMbc9o" />
        </div>
      </div>
    </div>
  );
}

export default App;
