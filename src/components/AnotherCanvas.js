import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import React from "react";
import { Engine, Scene, useClick } from "react-babylonjs";
import "../App.css";
function Cube() {
  const [ref] = useClick(() => {
    console.log("hi");
  });

  return (
    <box
      name="building-block"
      ref={ref}
      diameter={0}
      size={4}
      position={new Vector3(0, 0, 0)}
    >
      <standardMaterial
        name="material"
        diffuseColor={Color3.FromHexString("#246768")}
      />
    </box>
  );
}

const BabylonScene = () => (
  <div>
    <Engine antialias adaptToDeviceRatio canvasId="react-canvas">
      <Scene className="my-canvas">
        <arcRotateCamera
          name="camera"
          alpha={Math.PI / 2}
          beta={Math.PI / 2.5}
          radius={10}
          position={new Vector3(0, 0, 0)}
          setTarget={[Vector3.Zero()]}
        />
        <hemisphericLight
          name="light"
          intensity={0.2}
          groundColor={new Color3(3, 3, 3)}
          diffuse={new Color3(10, 10, 10)}
        />
        <Cube />
      </Scene>
    </Engine>
  </div>
);

export default BabylonScene;
