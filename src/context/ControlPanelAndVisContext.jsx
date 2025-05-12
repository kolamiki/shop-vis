import { createContext, useContext, useReducer, useState } from "react";
import { CubeControlPanelReducer } from "../reducers/CubeControlPanel";
import { CubeControlPanel } from "../forms/controlPanelForms";

const ControlPanelAndVisContext = createContext();

function ControlPanelAndVisProvider({ children }) {
  const [cubeState, cubeDispatch] = useReducer(
    CubeControlPanelReducer,
    CubeControlPanel
  );

  return (
    <ControlPanelAndVisContext.Provider value={{ cubeState, cubeDispatch }}>
      {children}
    </ControlPanelAndVisContext.Provider>
  );
}

function useCubeData() {
  const cubeContext = useContext(ControlPanelAndVisContext);

  if (cubeContext === undefined) {
    throw new Error(
      "ControlPanelAndVisContext was used outside the ControlPanelAndVisProvider"
    );
  }

  return cubeContext;
}

export { ControlPanelAndVisProvider, useCubeData };
