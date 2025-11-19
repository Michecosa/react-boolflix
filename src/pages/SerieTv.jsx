import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

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
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card h-100">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                  />
                ) : (
                  <div
                    className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
                    style={{ height: "300px" }}
                  >
                    No image found
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text" style={{ flexGrow: 1 }}>
                    {movie.overview
                      ? movie.overview.length > 100
                        ? movie.overview.slice(0, 100) + "..."
                        : movie.overview
                      : "No description found"}
                  </p>
                  <a
                    href={`https://www.themoviedb.org/tv/${movie.id}`}
                    target="_blank"
                    className="btn btn-danger mt-auto"
                  >
                    Dettagli
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">Nothing here</p>
      )}
    </div>
  );
}

export default SerieTv;
