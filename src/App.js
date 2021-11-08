import React, { useState } from "react";
import Switch from "./switch.js";
import "./index.css"
import {SuperButton} from "superkit/src"
// import {Button, TextField} from "superops-polaris-old";

function App() {
  const [state, setState] = useState(false);

  const handleOnChange = (value) => {
    setState(value);
    console.log(value, "lol new value");
  };
  return (
    <div>
    <Switch
    className="width"
    value={state}
    onChange={handleOnChange}
    size="large"
      // labels={{on:"", off:""}}
    />
    <SuperButton primary>Hello</SuperButton>
    </div>
    );

  
}

export default App;
