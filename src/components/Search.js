import { useState } from "react";
import { DropDown } from "./Dropdown";
import data from "../database/data";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const [showDropDown, setShowDropDown] = useState(true);
  const findValueInData = data.filter(({ feature }) =>
    feature.toLowerCase().includes(searchText?.toLowerCase()?.trim())
  );
  const searchValue = (text) => setSearchText(text);
  const closeDropDown = () => setShowDropDown(false);

  console.log(findValueInData, searchText, "dsfkhjk");
  return (
    <div>
      <input
        placeholder="Search"
        className="search-bar"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        // onBlur={() => setShowDropDown(false)}
        // onFocus={() => setShowDropDown(true)}
      />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      {showDropDown && (
        <DropDown
          foundData={findValueInData}
          searchValue={searchValue}
          closeDropDown={closeDropDown}
        />
      )}
    </div>
  );
};

export default SearchBar;
