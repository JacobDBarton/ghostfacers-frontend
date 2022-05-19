import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap'
import { Navbar, NavItem, NavLink} from "react-bootstrap"


const Nav = (props) => {
  return (
    <div className="nav">
      <Navbar bg='myRed' variant="dark">
      <Link className="nav-link" to="/">
        <div>Home</div>
      </Link>
      <Link className="nav-link" to="/Search">
        <div>Search For a Haunted Site</div>
      </Link>
      {/* <Link className="nav-link" to="/auth/signIn">
        <div>Sign In</div>
      </Link>
      <Link className="nav-link" to="/auth/signUp">
        <div>Sign Up</div>
      </Link> */}
      <NavItem>
        </NavItem>
            </Navbar>
    </div>
  );
};

export default Nav;
