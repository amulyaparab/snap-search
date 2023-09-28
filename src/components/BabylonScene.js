import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import { Engine, Scene } from "react-babylonjs";
import React, { useState } from "react";
import Cube from "./Cube";

const BabylonScene = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="canvas-container">
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="react-canvas"
        className="react-canvas"
      >
        <Scene clearColor={new Color3(0.87, 0.9, 1).toColor4()}>
          <freeCamera
            name="camera"
            position={new Vector3(10, 10, -10)}
            radius={1}
            setTarget={[Vector3.Zero()]}
          />
          <hemisphericLight
            name="light"
            intensity={0.2}
            groundColor={new Color3(3, 3, 3)}
            diffuse={new Color3(10, 10, 10)}
            direction={Vector3.Up()}
          />
          <Cube
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
          />
        </Scene>
      </Engine>
    </div>
  );
};

export default BabylonScene;
