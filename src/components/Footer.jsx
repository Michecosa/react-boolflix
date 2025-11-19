import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-super-super-dark text-white-50 pt-5">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src={logo}
                      alt="Boolflix logo"
                      className="d-inline-block align-middle"
                      style={{ height: "28px" }}
                    />
                  </NavLink>
                </h6>
                <p>Hire me please</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Questions</h6>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ways to Watch
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Corporate Information
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>Los Gatos, CA 95032, USA</p>
                <p>help@netflix.com</p>
                <p>+1 408 540 3700</p>
                <p>+1 408 540 3701</p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2025 Copyright:
          <a
            className="text-reset fw-bold ms-2"
            href="https://github.com/Michecosa"
            target="_blank"
          >
            Michela Della Gatta
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
