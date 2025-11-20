import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import Card from "../components/Card";
import axios from "axios";

function AggiuntiDiRecente() {
  const { movies, setMovies, query } = useContext(SearchContext);
  const api_key = import.meta.env.VITE_TMDB_KEY;

  const loadPopular = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadPopular();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      loadPopular();
    }
  }, [query]);

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

export default AggiuntiDiRecente;
