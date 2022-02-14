import React, { useState, useCallback } from "react";
import { ActionList, Popover, Button } from "@shopify/polaris";

function SecApp() {
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );
  const [state, setState] = useState(false);

  const handleOnChange = (value) => {
    setState(value);
    console.log(value, "lol new value");
  };
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div style={{ height: "2000px" }}></div>
      <div
        style={{
          backgroundColor: "grey",
          overflow: "auto",
          height: "500px",
          width: "500px",
          position: "absolute",
          left: "500px",
          top: "250px",
        }}
      >
        <div style={{ height: "1000px" }}> </div>
        <Popover
          // fixed
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
        >
          <ActionList items={[{ content: "Import" }, { content: "Export" }]} />
        </Popover>
        <div style={{ height: "1000px" }}> </div>
      </div>
    </div>
  );
}

export default SecApp;
