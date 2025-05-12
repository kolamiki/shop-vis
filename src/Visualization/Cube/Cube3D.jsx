import * as THREE from "three";
import { useRef } from "react";
import { PivotControls } from "@react-three/drei";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { useCubeData } from "../../context/ControlPanelAndVisContext";

const box = new THREE.BoxGeometry();

function Cube3D(props) {
  const csg = useRef();

  const { cubeState } = useCubeData();

  const scale = 10;
  const { cubeHeight, cubeThickness } = cubeState[0];
  //   const width = cubeWidth.value / scale;
  const height = cubeHeight.value / scale;
  const thickness = cubeThickness.value / scale;

  return (
    <mesh receiveShadow castShadow position={[0.0, height / 5, 0]} {...props}>
      <Geometry ref={csg} computeVertexNormals>
        <Base name="cube" geometry={box} scale={[height, height, height]} />
        <Subtraction
          name="hole"
          geometry={box}
          scale={[height - thickness, height - thickness, height]}
        />
      </Geometry>
      <meshStandardMaterial envMapIntensity={0.25} />
    </mesh>
  );
}

export default Cube3D;
