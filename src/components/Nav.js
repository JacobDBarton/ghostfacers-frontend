import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap'
import { Navbar, NavItem, NavLink} from "react-bootstrap"


const Nav = (props) => {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        <div>Home</div>
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
