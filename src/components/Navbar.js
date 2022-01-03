import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </nav>
      </div>
    </>
  );
}
