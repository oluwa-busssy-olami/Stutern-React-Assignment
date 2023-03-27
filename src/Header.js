import React from "react";

function Header() {
  return (
    <div className="container">
      <header>
        <h1> Welcome to my website! </h1>{" "}
        <nav>
          <ul>
            <li>
              <a href="#"> Home </a>{" "}
            </li>{" "}
            <li>
              <a href="#"> About </a>{" "}
            </li>{" "}
            <li>
              <a href="#"> Services </a>{" "}
            </li>{" "}
            <li>
              <a href="#"> Contact </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </header>{" "}
    </div>
  );
}
export default Header;
