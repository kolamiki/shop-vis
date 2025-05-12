import * as THREE from "three";
import { useRef } from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PivotControls } from "@react-three/drei";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import Cube3D from "./Cube/Cube3D";
import { Environment } from "./Environment";
import { useCubeData } from "../context/ControlPanelAndVisContext";
import { useState } from "react";
import Tap from "./Sink/Tap";

// const box = new THREE.BoxGeometry();
// const cyl = new THREE.CylinderGeometry(1, 1, 2, 20);
// const tri = new THREE.CylinderGeometry(1, 1, 2, 3);

function Visualization3D({ isCustomShown }) {
  const customModel = useLoader(GLTFLoader, "/shop-vis/customModels/magic.glb");
  const { cubeState } = useCubeData();
  const scale = 10;
  const { cubeHeight, cubeThickness } = cubeState[0];
  //   const width = cubeWidth.value / scale;
  const height = cubeHeight.value / scale;
  const thickness = cubeThickness.value / scale;

  return (
    <Canvas
      shadows
      camera={{ position: [-15, 10, 15], fov: 25 }}
      style={{ width: "500px", height: "500px" }}
    >
      {/* <color attach="background" args={["skyblue"]} /> */}
      {isCustomShown ? (
        <primitive object={customModel.scene} scale={10} />
      ) : (
        <Cube3D height={height} thickness={thickness} />
        // <Tap />
      )}
      <Environment />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default Visualization3D;
