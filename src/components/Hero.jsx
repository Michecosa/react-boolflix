import { useEffect, useState } from "react";
import "../styles/Hero.css";

function Hero({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  if (movies.length === 0) {
    return null;
  }

  const currentMovie = movies[currentIndex];
  const backdropUrl = currentMovie.backdrop_path || currentMovie.poster_path;
  const imageUrl = `https://image.tmdb.org/t/p/original${backdropUrl}`;

  return (
    <div className="hero-container">
      <div
        className={`hero-image ${isVisible ? "fade-in" : "fade-out"}`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          {currentMovie.title || currentMovie.name}
        </h1>
        <p className="hero-description">{currentMovie.overview}</p>
        <div className="hero-actions">
          <button className="btn btn-danger">Play</button>
          <button className="btn btn-outline-light">More Info</button>
        </div>
      </div>

      <div className="hero-indicators">
        {movies.slice(0, 5).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 300);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
