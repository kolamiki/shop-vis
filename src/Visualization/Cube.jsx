import React from "react";
import { Group, Rect, Text } from "react-konva";

function SingleCube({
  xPos,
  yPos,
  width,
  height,
  thickness,
  cubeNumber,
  setClickedCubeId,
  isHighlighted = false,
}) {
  return (
    <Group
      // style={{ zIndex: isHighlighted ? 100 : 1 }}
      draggable
      onClick={() => {
        console.log("clicked", cubeNumber);
        setClickedCubeId(cubeNumber);
      }}
    >
      <Rect
        x={xPos}
        y={yPos}
        width={width}
        height={height}
        fill="grey"
        shadowBlur={isHighlighted ? 20 : 0}
        stroke
        shadowColor={isHighlighted ? "gold" : "transparent"}
      />
      <Rect
        x={xPos + thickness}
        y={yPos + thickness}
        width={width - 2 * thickness}
        height={height - 2 * thickness}
        fill="white"
      />
      <Text
        x={xPos + width / 2 - 5}
        y={yPos + height / 2 - 5}
        text={cubeNumber}
        fontSize={15}
      />
    </Group>
  );
}

export default SingleCube;
