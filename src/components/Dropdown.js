const DropDown = ({ foundData, searchValue, clearSearch }) => {
  return (
    <div className="drop-down">
      {foundData?.length && searchValue.length ? (
        foundData?.map(({ id, feature }) => (
          <li key={id} onClick={() => searchValue(feature)}>
            {feature}
          </li>
        ))
      ) : (
        <div className="not-found" onClick={clearSearch}>
          Not Found. Go Back
        </div>
      )}
    </div>
  );
};

export default DropDown;
