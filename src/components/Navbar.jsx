import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";

function Navbar() {
  const { setMovies, query, setQuery } = useContext(SearchContext);
  const api_key = import.meta.env.VITE_TMDB_KEY;
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    let endpoint = "";
    if (location.pathname === "/SerieTv") {
      endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${encodeURIComponent(
        query
      )}`;
    } else {
      endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
        query
      )}`;
    }

    axios
      .get(endpoint)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-super-super-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Boolflix logo"
            className="d-inline-block align-middle"
            style={{ height: "28px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SerieTv">
                Serie Tv
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Film">
                Film
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Originali">
                Originali
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AggiuntiDiRecente">
                Aggiunti di recente
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/LaMiaLista">
                La mia Lista
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2 bg-super-dark text-white border-0 input-dark"
              type="search"
              placeholder="Search movie"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className="btn text-white" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
