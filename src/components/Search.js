import { useRef, useState } from "react";
import DropDown from "./Dropdown";
import data from "../database/data";

const SearchBar = ({ closeSearch }) => {
  const inputRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const findValueInData = data.filter(({ feature }) =>
    feature.toLowerCase().includes(searchText?.toLowerCase()?.trim())
  );

  const showTheDropdown = () => setShowDropDown(true);

  const searchValue = (text) => {
    setSearchText(text);
    setShowDropDown(false);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearSearch = () => {
    setSearchText("");
    focusInput();
  };

  return (
    <div className="relative">
      <i
        className="fa-solid fa-circle-xmark search-icon close"
        onClick={closeSearch}
      ></i>
      <input
        ref={inputRef}
        placeholder="Search"
        className="search-bar"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onFocus={showTheDropdown}
      />
      {showDropDown && (
        <i className="fa-solid fa-eraser search-icon" onClick={clearSearch}></i>
      )}
      {showDropDown && (
        <DropDown
          foundData={findValueInData}
          searchValue={searchValue}
          clearSearch={clearSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
