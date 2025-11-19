import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

function Home() {
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
              {movie.title} ({movie.overview})
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessun film cercato</p>
      )}
    </div>
  );
}

export default Home;
