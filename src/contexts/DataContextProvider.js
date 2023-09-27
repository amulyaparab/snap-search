import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <DataContext.Provider value={{ showSearchBar, setShowSearchBar }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
