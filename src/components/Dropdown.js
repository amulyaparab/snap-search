import { useEffect } from "react";

export const DropDown = ({ foundData, searchValue, closeDropDown }) => {
  console.log(searchValue);
  useEffect(() => {}, []);
  return (
    <div className="drop-down">
      {foundData?.map(({ id, feature }) => {
        return (
          <li
            key={id}
            onClick={() => {
              searchValue(feature);
              closeDropDown();
            }}
          >
            {feature}
          </li>
        );
      })}
    </div>
  );
};
