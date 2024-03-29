import React from "react";

import "./Landing.scss";
import KavettamLogo from "../assets/kavettam.png";

function Landing() {
  return (
    <div className="Landing">
      <section className="Hero">
        <p className="Dheeravam">ധീരവം കോളേജ് യൂണിയൻ അവതരിപ്പിക്കുന്നു</p>
        <img src={KavettamLogo} alt="Daksha" />
        <h4>ARTS FEST</h4>
        <p className="month">APRIL</p>
        <h3>5 6 7</h3>
        <p>GEC IDUKKI</p>
        <a href="https://drive.google.com/file/d/18av_nSavGaPboWRiNu1ACp-oZCtJ5x4O/view?usp=sharing" target="_blank">See Guidelines</a>
      </section>
    </div>
  );
}

export default Landing;
