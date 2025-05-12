import * as THREE from "three";
import { useRef } from "react";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

const torusGeometry = new THREE.TorusGeometry(1, 0.05, 48, 100, Math.PI / 2);

function Tap() {
  const csg = useRef();
  const scale = 10;

  const curve = new THREE.ArcCurve(0, 0, 0.5, 0, 0, Math.PI / 2, false);
  const crossSection = new THREE.Shape();
  crossSection.absarc(0, 0, 0.05, 0, Math.PI * 2, false);

  const extrudeSettings = {
    steps: 10,
    extrudePath: new THREE.CurvePath().add(curve),
  };

  const extrudedTap = new THREE.ExtrudeGeometry(crossSection, extrudeSettings);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} computeVertexNormals>
        <mesh geometry={extrudedTap}>
          <meshStandardMaterial color="orange" />
        </mesh>
      </Geometry>
    </mesh>
  );
}

export default Tap;
