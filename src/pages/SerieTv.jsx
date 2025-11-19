import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SerieTv() {
  const { movies } = useContext(SearchContext);

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
