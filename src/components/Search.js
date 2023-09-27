import { useEffect, useState } from "react";
import { useData } from "../contexts/DataContextProvider";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dataArray = [
    { id: 1, feature: "Lawn" },
    { id: 2, feature: "Garden" },
    { id: 3, feature: "Terrace" },
    { id: 4, feature: "Balcony" },
    { id: 5, feature: "Patio" },
    { id: 6, feature: "Greenhouse" },
    { id: 7, feature: "Courtyard" },
    { id: 8, feature: "Porch" },
    { id: 9, feature: "Poolhouse" },
    { id: 10, feature: "Grill Area" },
  ];
  return (
    <div>
      <input
        placeholder="Lawn"
        className="search-bar"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
    </div>
  );
};

export default SearchBar;
