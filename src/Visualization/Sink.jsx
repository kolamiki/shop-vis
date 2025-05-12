import React, { useState } from "react";
import { Rect, Circle } from "react-konva";

function Sink() {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth
  );
  const [currentWindowHeight, setCurrentWindowHeight] = useState(
    window.innerHeight
  );

  return (
    <>
      <Rect x={450} y={450} width={500} height={100} fill="grey" />
      <Rect x={450} y={250} width={500} height={100} fill="grey" />
      <Rect x={575} y={265} width={250} height={75} fill="rgb(72, 70, 70)" />
      <Circle x={700} y={300} radius={10} fill="black" />
    </>
  );
}

export default Sink;
