import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

function SerieTv() {
  const { movies, setMovies, setQuery } = useContext(SearchContext);

  useEffect(() => {
    setMovies([]);
    setQuery("");
  }, [setMovies, setQuery]);

  return (
    <div>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.original_name} ({movie.overview})
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessuna serie tv cercata</p>
      )}
    </div>
  );
}

export default SerieTv;
