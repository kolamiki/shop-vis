import React, { useEffect, useRef, useState } from "react";

import { Stage, Layer, Rect, Text } from "react-konva";

import { Card } from "primereact/card";
import Sink from "./Sink";

import CubesStack from "./CubesStack";

import "./VisualizationWindow.css";
import Visualization3D from "./Visualization3D";

function VisualizationWindow({ isCustomShown }) {
  const containerRef = useRef(null);
  const [stageSize, setStageSize] = useState({ width: 600, height: 500 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setStageSize({ width, height });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stageRef = useRef(null);

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? 1 : -1;

    // when we zoom on trackpad, e.evt.ctrlKey is true
    // in that case lets revert direction
    if (e.evt.ctrlKey) {
      direction = -direction;
    }

    const scaleBy = 1.1;
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
  };

  return (
    <Visualization3D isCustomShown={isCustomShown} />
    // <Card id="card-with-visualization" className="card-with-visualization">
    //   <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
    //     <Stage
    //       ref={stageRef}
    //       width={stageSize.width}
    //       height={stageSize.height}
    //       onWheel={handleWheel}
    //     >
    //       <Layer>
    //         <CubesStack stageSize={stageSize} />
    //       </Layer>
    //     </Stage>
    //   </div>
    // </Card>
  );
}

export default VisualizationWindow;
