import { useEffect, useRef, useState } from "react";
import DropDown from "./Dropdown";
import data from "../database/data";

const SearchBar = ({ closeSearch }) => {
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const showTheDropdown = () => setShowDropDown(true);
  const hideTheDropdown = () => setShowDropDown(false);

  const findValueInData = data.filter(({ feature }) =>
    feature.toLowerCase().includes(searchText?.toLowerCase()?.trim())
  );

  const searchValue = (text) => {
    setSearchText(text);
    setShowDropDown(false);
  };

  const focusInput = () => inputRef.current && inputRef.current.focus();

  const clearSearch = () => {
    setSearchText("");
    focusInput();
  };

  const handleClickOutside = (event) => {
    const elementIsNotInside = !searchRef.current.contains(event.target);
    if (searchRef.current && elementIsNotInside) {
      hideTheDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <i
        className="fa-solid fa-circle-xmark search-icon close"
        onClick={closeSearch}
      ></i>
      <input
        ref={inputRef}
        placeholder="Search here"
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
