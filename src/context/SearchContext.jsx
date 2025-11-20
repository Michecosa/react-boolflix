import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [adultContent, setAdultContent] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
        adultContent,
        setAdultContent,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
