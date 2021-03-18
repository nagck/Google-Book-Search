import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Google Books</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>

    </nav>
  )
};

export default Nav;