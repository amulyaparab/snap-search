import { Vector3 } from "@babylonjs/core";
import { Html, useClick } from "react-babylonjs";
import cube from "../images/cube.jpg";
import SearchBar from "./Search";

const Cube = ({ setShowSearchBar, showSearchBar }) => {
  const [ref] = useClick(() => setShowSearchBar(true));
  const closeSearch = () => setShowSearchBar(false);

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
            {showSearchBar && <SearchBar closeSearch={closeSearch} />}
          </Html>
        </standardMaterial>
      </box>
    </>
  );
};

export default Cube;
