import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import React from "react";
import { Engine, Scene } from "react-babylonjs";
import "../App.css";
import Cube from "./Cube";
import { useData } from "../contexts/DataContextProvider";

const BabylonScene = () => {
  const { setShowSearchBar, showSearchBar } = useData();

  return (
    <div className="canvas-container">
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="react-canvas"
        className="react-canvas"
      >
        <Scene clearColor={new Color3(0.87, 0.9, 1).toColor4()}>
          {/* <arcRotateCamera
            name="camera"
            alpha={Math.PI / 2}
            beta={Math.PI / 2.5}
            radius={10}
            position={new Vector3(0, 0, 0)}
            setTarget={[Vector3.Zero()]}
          />{" "} */}
          <freeCamera
            name="camera1"
            position={new Vector3(0, 5, -10)}
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
