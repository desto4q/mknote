import React, {createContext, ReactNode, useContext, useState} from 'react';

let SearchContext = createContext<{
  searchTerm: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

let SearchContextProvider = ({children}: {children: ReactNode}) => {
  let [searchTerm, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{searchTerm, setSearch}}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchContextProvider');
  }

  return context;
};

export {SearchContext, SearchContextProvider, useSearch};
