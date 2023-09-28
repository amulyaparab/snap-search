import { Vector3 } from "@babylonjs/core";
import { Html, useClick } from "react-babylonjs";
import cube from "../images/cube.jpg";
import "../App.css";
import SearchBar from "./Search";

const Cube = ({ setShowSearchBar, showSearchBar }) => {
  const [ref] = useClick(() => {
    setShowSearchBar(true);
  });
  console.log(showSearchBar);
  return (
    <>
      <box
        name="building-block"
        ref={ref}
        diameter={0}
        size={5}
        position={new Vector3(0, 0, 0)}
      >
        <standardMaterial name="material">
          <texture assignTo="diffuseTexture" url={cube} />
          <Html occlude={false} name="html">
            {showSearchBar && <SearchBar />}
          </Html>
        </standardMaterial>
      </box>
    </>
  );
};

export default Cube;
