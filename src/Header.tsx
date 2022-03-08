import React from "react";
import { you } from "./object";

export default function Header() {
  const [user, setUser] = React.useState(you);

  function populateUser(isReturning: boolean) {
    if (isReturning == true) {
      return " back ";
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="nav-bar">
        <div className="logo"></div>
        <h3 className="user-container ms-2">
          Welcome
          <span id="user">{populateUser(user.isReturning)}</span>
          <span className="text-white ">{user.firstName}</span>
        </h3>
      </div>
    </nav>
  );
}
