import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";
import React, { useReducer, useState } from "react";

import "./SingleValueSlider.css";

function SingleValueSlider({
  cubeIndex,
  parameterName,
  parameterValue,
  cubeParameter,
  cubeDispatch,
}) {
  return (
    <div className="slider-and-annotation">
      <p>{parameterName}</p>
      <div className="slider-and-input">
        <InputNumber
          value={parameterValue}
          onValueChange={(e) =>
            cubeDispatch({
              type: "UPDATE_CUBE_PARAMETER",
              payload: {
                cubeIndex: cubeIndex,
                cubeParameter: cubeParameter,
                parameterValue: Number(e.value),
              },
            })
          }
          min={cubeParameter.toLowerCase().includes("thickness") ? 1 : 20}
          max={cubeParameter.toLowerCase().includes("thickness") ? 10 : 150}
          className="input-window"
        />
        <Slider
          value={parameterValue}
          onChange={(e) =>
            cubeDispatch({
              type: "UPDATE_CUBE_PARAMETER",
              payload: {
                cubeIndex: cubeIndex,
                cubeParameter: cubeParameter,
                parameterValue: Number(e.value),
              },
            })
          }
          className="slider"
          min={cubeParameter.toLowerCase().includes("thickness") ? 1 : 20}
          max={cubeParameter.toLowerCase().includes("thickness") ? 10 : 150}
        />
      </div>
    </div>
  );
}

export default SingleValueSlider;
