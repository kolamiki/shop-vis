import React, { useState } from "react";
import SingleCube from "./Cube";
import { useCubeData } from "../context/ControlPanelAndVisContext";

function CubesStack({ stageSize }) {
  const [clickedCubeId, setClickedCubeId] = useState(1);

  const scale = 2.5;

  const { cubeState } = useCubeData();
  console.log("cubeState", cubeState);

  return (
    <>
      {cubeState.map((singleCubeObj, index) => {
        return (
          <SingleCube
            key={index + 1}
            xPos={stageSize.width / 4}
            yPos={stageSize.height / 2}
            width={singleCubeObj.cubeWidth.value * scale}
            height={singleCubeObj.cubeHeight.value * scale}
            thickness={singleCubeObj.cubeThickness.value / 2}
            cubeNumber={1}
            setClickedCubeId={setClickedCubeId}
            isHighlighted={clickedCubeId === 1}
          />
        );
      })}

      {/* <SingleCube
        key={2}
        xPos={stageSize.width / 4 + 100}
        yPos={stageSize.height / 2}
        width={100}
        height={100}
        thickness={10}
        cubeNumber={2}
        setClickedCubeId={setClickedCubeId}
        isHighlighted={clickedCubeId === 2}
      />
      <SingleCube
        key={3}
        xPos={stageSize.width / 4 + 200}
        yPos={stageSize.height / 2 - 100}
        width={100}
        height={200}
        thickness={5}
        cubeNumber={3}
        setClickedCubeId={setClickedCubeId}
        isHighlighted={clickedCubeId === 3}
      />
      <SingleCube
        key={4}
        xPos={stageSize.width / 4 + 100}
        yPos={stageSize.height / 2 - 100}
        width={100}
        height={100}
        thickness={10}
        cubeNumber={4}
        setClickedCubeId={setClickedCubeId}
        isHighlighted={clickedCubeId === 4}
      /> */}
    </>
  );
}

export default CubesStack;
