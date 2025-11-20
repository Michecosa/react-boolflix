function Card({ movie }) {
  return (
    <div className="col-md-3 mb-4" key={movie.id}>
      <div className="card card-hover bg-super-dark text-white shadow-sm h-100">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${
              movie.poster_path || movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            style={{ width: "100%", height: "390px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center bg-dark text-white"
            style={{ height: "100%" }}
          >
            No image found
          </div>
        )}

        <div className="overlay d-flex flex-column justify-content-end p-3">
          <h4 className="fw-bold">{movie.name || movie.title}</h4>

          <p className="text-white-50">
            {movie.overview
              ? movie.overview.length > 100
                ? movie.overview.slice(0, 200) + "..."
                : movie.overview
              : "No description found"}
          </p>
          <p className="mb-1">
            <strong>Titolo originale:</strong>{" "}
            {movie.original_title || movie.original_name || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Voto:</strong>{" "}
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>
          <p className="mb-3 text-uppercase">
            <strong>Lingua:</strong> {movie.original_language || "N/A"}
          </p>
          <a
            href={`https://www.themoviedb.org/${movie.title ? "movie" : "tv"}/${
              movie.id
            }`}
            target="_blank"
            className="btn btn-danger mt-auto"
          >
            Dettagli
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
