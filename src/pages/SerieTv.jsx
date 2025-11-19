import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import Card from "../components/Card";

function SerieTv() {
  const { movies, setMovies, setQuery } = useContext(SearchContext);

  useEffect(() => {
    setMovies([]);
    setQuery("");
  }, [setMovies, setQuery]);

  return (
    <div className="container mt-4">
      {movies.length > 0 ? (
        <div className="row">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4 text-white">Nothing here</p>
      )}
    </div>
  );
}

export default SerieTv;
