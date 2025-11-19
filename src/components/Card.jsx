function Card({ movie }) {
  return (
    <div className="col-md-3 mb-4" key={movie.id}>
      <div className="card h-100">
        <div style={{ height: "390px", overflow: "hidden" }}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center bg-secondary text-white"
              style={{ height: "100%" }}
            >
              No image found
            </div>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.name || movie.title}</h5>
          <p className="card-text" style={{ flexGrow: 1 }}>
            {movie.overview
              ? movie.overview.length > 100
                ? movie.overview.slice(0, 100) + "..."
                : movie.overview
              : "No description found"}
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
