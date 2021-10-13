import React from "react";
import AtomIcon from "../../assets/AtomhealthLogo_200x200__1-removebg-preview (1).png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#s">
          <div className="container brand-container">
            <img className="atomIcon" src={AtomIcon} alt="atomIcon" />
            <div className="brand-name">Atom Health</div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#s">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#s">
                #MyCovidProof
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#s">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#s">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#s">
                More
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
