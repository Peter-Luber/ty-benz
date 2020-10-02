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
          <div>
            <img src={tblogo} className="App-logo" alt="Ty Benz logo" />
          </div>
          <div>
            <p>
              Tyler Benz, Director/Producer/Co-Founder - All The Smoke Pictures
              <br></br>
              <text>Inquiries: </text>
              <a href="mailto:tyler@allthesmokepictures.com">
                tyler@allthesmokepictures.com
              </a>
              <br></br>
              <text>Instagram: </text>
              <a href="https://www.instagram.com/tylerbenz/">@tylerbenz</a>
              <text> - </text>
              <a href="https://www.instagram.com/allthesmokepictures/">
                @allthesmokepictures
              </a>
            </p>
          </div>
          <div className="Ats-logo-box">
            <a href="https://www.instagram.com/allthesmokepictures/">
              <img
                src={atslogo}
                className="Ats-logo"
                alt="All The Smoke logo"
              />
            </a>
          </div>
        </div>
      </header>
      <div className="Media-wrapper">
        <div className="Media-container">
          <Video id="vid0038" ytId="A2mJSG0L9U0" />
          <Video id="vid0037" ytId="TNn1q8o-MyU" />
          <Video id="vid0036" ytId="sO9z-MGzdRc" />
          <Video id="vid0035" ytId="BYXXs8PGYsY" />
          <Video id="vid0034" ytId="tqMD4_PJVKw" />
          <Video id="vid0033" ytId="85rsnDrvsGQ" />
          <Video id="vid0032" ytId="WO-jOWpwkk4" />
          <Video id="vid0031" ytId="m0PN6OTEPCA" />
          <Video id="vid0030" ytId="QVU1vUNT2QY" />
          <Video id="vid0029" ytId="mF3giSUBe84" />
          <Video id="vid0028" ytId="MQzW2pH_C-A" />
          <Video id="vid0027" ytId="9inAXIBczBo" />
          <Video id="vid0026" ytId="XucF4r4nn6U" />
          <Video id="vid0025" ytId="PCAud7oqvZQ" />
          <Video id="vid0024" ytId="8W9wUtDHR6M" />
          <Video id="vid0023" ytId="wh-QcK8xdXA" />
          <Video id="vid0022" ytId="2aBtHYgfsMw" />
          <Video id="vid0021" ytId="63UganSCnXU" />
          <Video id="vid0020" ytId="mpzEQfc0iY8" />
          <Video id="vid0019" ytId="WDvMWu_cMg8" />
          <Video id="vid0018" ytId="rBRUXenAVKc" />
          <Video id="vid0017" ytId="JlE3BpBMIz4" />
          <Video id="vid0016" ytId="rr7rC-2Nb2A" />
          <Video id="vid0015" ytId="8FMp0Iu9Euw" />
          <Video id="vid0014" ytId="u9L8z4B87dE" />
          <Video id="vid0013" ytId="Z-iApuXDak4" />
          <Video id="vid0012" ytId="KDCYzZJdOh0" />
          <Video id="vid0011" ytId="bcndCSlfvSc" />
          <Video id="vid0010" ytId="hUpdLvm-SF4" />
          <Video id="vid0009" ytId="MCHHA_5X0VY" />
          <Video id="vid0008" ytId="orjqmGye9ag" />
          <Video id="vid0007" ytId="tG7wLK4aAOE" />
          <Video id="vid0006" ytId="lOa7BVsobvM" />
          <Video id="vid0005" ytId="-paB61LOOvY" />
          <Video id="vid0004" ytId="un3vVJcadlQ" />
          <Video id="vid0003" ytId="Sw6UPV2sM9M" />
          <Video id="vid0002" ytId="nsT71j8I24Q" />
          <Video id="vid0001" ytId="MS3GVHMbc9o" />
        </div>
      </div>
    </div>
  );
}

export default App;
