import { useEffect, useContext, useRef } from "react";
import { SearchContext } from "../context/SearchContext";
import Hero from "../components/Hero";
import axios from "axios";

function Home() {
  const { movies, setMovies } = useContext(SearchContext);
  const api_key = import.meta.env.VITE_TMDB_KEY;
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [setMovies, api_key]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      {movies.length > 0 && <Hero movies={movies} />}
      <div className="m-4">
        <h2 className="text-white mb-4">Trending Now</h2>

        {movies.length > 0 ? (
          <div style={{ position: "relative" }}>
            <button
              className="scroll-btn scroll-btn-left"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="scroll-btn scroll-btn-right"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <i className="bi bi-chevron-right"></i>
            </button>

            <div
              ref={scrollContainerRef}
              style={{
                display: "flex",
                gap: "10px",
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  style={{ minWidth: "200px", flexShrink: 0 }}
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        movie.poster_path || movie.backdrop_path
                      }`}
                      alt={movie.name || movie.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-secondary text-white"
                      style={{
                        height: "300px",
                        borderRadius: "8px",
                      }}
                    >
                      No image found
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-muted">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
