import React from "react";
import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
