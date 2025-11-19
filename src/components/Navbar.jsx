import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movie"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
