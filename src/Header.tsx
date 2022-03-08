import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="nav-bar">
        <div className="logo"></div>
        <h3 className="user-container">
          Welcome
          <span id="returning-user"></span>
          <span id="user"></span>
        </h3>
      </div>
    </nav>
  );
}
