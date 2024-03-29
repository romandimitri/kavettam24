import React from "react";

import "./Spinner.scss";
import Loading from "../assets/loadingAnim.gif";

function Spinner() {
  return (
    <div className="loader-box">
      <img className="loader" src={Loading} alt="Loading . . ." />
    </div>
  );
}

export default Spinner;
