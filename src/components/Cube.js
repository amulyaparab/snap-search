import { Vector3 } from "@babylonjs/core";
import { Html, useClick } from "react-babylonjs";
import cube from "../images/cube.jpg";
import "../App.css";
import SearchBar from "./Search";

const Cube = ({ setShowSearchBar, showSearchBar }) => {
  const [ref] = useClick(() => {
    setShowSearchBar(true);
    console.log("hgkjsd");
  });

  return (
    <>
      <box
        name="building-block"
        ref={ref}
        diameter={0}
        size={4}
        position={new Vector3(0, 0, 0)}
      >
        <standardMaterial name="material">
          <texture assignTo="diffuseTexture" url={cube} />
        </standardMaterial>
      </box>
      <Html name="html">{showSearchBar && <SearchBar />}</Html>
    </>
  );
};

export default Cube;
