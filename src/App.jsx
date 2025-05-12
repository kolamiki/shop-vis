// import { useState } from "react";
import React, { useEffect, useState } from "react";

import "./App.css";
import VisualizationWindow from "./Visualization/VisualizationWindow";
import ControlPanel from "./ControlPanel/ControlPanel";
import { ControlPanelAndVisProvider } from "./context/ControlPanelAndVisContext";

function App() {
  const minWindowWidth = 930;
  const [columnOrder, setColumnOrder] = useState(
    window.innerWidth < minWindowWidth
  );

  const [isCustomShown, setIsCustomShown] = useState(false);

  useEffect(() => {
    function handleResize() {
      setColumnOrder(window.innerWidth < minWindowWidth);
    }

    window.addEventListener("resize", handleResize);

    //
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="main-window-positions"
      style={{ flexDirection: columnOrder ? "column" : "row" }}
    >
      <ControlPanelAndVisProvider>
        <VisualizationWindow isCustomShown={isCustomShown} />
        <ControlPanel
          isCustomShown={isCustomShown}
          setIsCustomShown={setIsCustomShown}
        />
      </ControlPanelAndVisProvider>
    </div>
  );
}

export default App;
