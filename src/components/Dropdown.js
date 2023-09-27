export const DropDown = ({ foundData }) => {
  return (
    <div className="drop-down">
      {foundData?.map(({ id, feature }) => (
        <li key={id}>{feature}</li>
      ))}
    </div>
  );
};
