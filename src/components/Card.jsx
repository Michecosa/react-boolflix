const languageToCountry = {
  en: "us",
  it: "it",
  fr: "fr",
  es: "es",
  de: "de",
  ja: "jp",
  zh: "cn",
  ko: "kr",
  ru: "ru",
  pt: "pt",
  th: "th",
};

function Card({ movie }) {
  const vote5 = movie.vote_average ? Math.ceil(movie.vote_average / 2) : 0;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < vote5 ? "text-warning" : "text-secondary"}>
        <i className="bi bi-star-fill me-1"></i>
      </span>
    );
  }

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
          <h4 className="fw-bold">
            {movie.name || movie.title
              ? (movie.name || movie.title).length > 30
                ? (movie.name || movie.title).slice(0, 30) + "..."
                : movie.name || movie.title
              : "No title found"}
          </h4>

          <p className="text-white-50">
            {movie.overview
              ? movie.overview.length > 100
                ? movie.overview.slice(0, 100) + "..."
                : movie.overview
              : "No description found"}
          </p>
          <p className="mb-1">
            <strong>Titolo originale:</strong>{" "}
            {movie.original_title || movie.original_name || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Voto:</strong>{" "}
            <span className="ms-1">{vote5 > 0 && stars}</span>
          </p>
          <p className="mb-3">
            <strong className="me-2">Lingua:</strong>{" "}
            {movie.original_language ? (
              languageToCountry[movie.original_language] ? (
                <span
                  className={`fi fi-${
                    languageToCountry[movie.original_language]
                  }`}
                ></span>
              ) : (
                movie.original_language.toUpperCase()
              )
            ) : (
              "N/A"
            )}
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
