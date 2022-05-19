import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        <div>Home</div>
      </Link>
      <Link className="nav-link" to="/Search">
        <div>Search for a Haunted Location!</div>
      </Link>
      {/* <Link className="nav-link" to="/auth/signIn">
        <div>Sign In</div>
      </Link>
      <Link className="nav-link" to="/auth/signUp">
        <div>Sign Up</div>
      </Link> */}
    </div>
  );
};

export default Nav;
