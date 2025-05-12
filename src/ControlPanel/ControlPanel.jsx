import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";

import SingleValueSlider from "./SingleValueSlider";

import "./ControlPanel.css";
import { CubeControlPanel } from "../forms/controlPanelForms";
import { CubeControlPanelReducer } from "../reducers/CubeControlPanel";
import { useCubeData } from "../context/ControlPanelAndVisContext";

function ControlPanel({ isCustomShown, setIsCustomShown }) {
  const { cubeState, cubeDispatch } = useCubeData();

  return (
    <Card title="Control panel" className="control-panel">
      <Checkbox
        inputId="show-custom"
        onChange={(e) => setIsCustomShown(e.checked)}
        checked={isCustomShown}
      />
      <label htmlFor="show-custom">Show Custom 3D Model</label>
      {!isCustomShown &&
        cubeState.map((singleCubeObj, cubeIndex) =>
          Object.values(singleCubeObj).map((cubeParam, index) => (
            <SingleValueSlider
              key={index}
              cubeIndex={cubeIndex}
              cubeParameter={Object.keys(singleCubeObj)[index]}
              parameterName={cubeParam.label}
              parameterValue={cubeParam.value}
              cubeDispatch={cubeDispatch}
            />
          ))
        )}
    </Card>
  );
}

export default ControlPanel;
