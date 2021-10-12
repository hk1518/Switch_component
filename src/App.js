import React, { useState } from "react";
import Switch from "./switch.js";
// import {Button, TextField} from "superops-polaris-old";

function App() {
  const [state, setState] = useState(false);

  const handleOnChange = (value) => {
    setState(value);
    console.log(value, "lol new value");
  };
  return (
    <Switch
    // className="width"
    value={state}
    onChange={handleOnChange}
    size="large"
      // labels={{on:"", off:""}}
    />
    );

  
}

export default App;
