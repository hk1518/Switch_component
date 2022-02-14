import React, { useState, useCallback } from "react";
import Switch from "./switch.js";
import "./index.css";
// import {SuperButton} from "superkit/src"
import SecApp from "./secapp";
function App() {
  const [switchstate, setswitchstate] = useState(false);

  const handleOnChange = (value) => {
    setswitchstate(!value);
  };

  return (
    <Switch
      // className="mywidth"
      value={switchstate}
      size="large"
      onChange={handleOnChange}
    />
  );
}

export default App;
