import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
