import { Link } from "react-router-dom";
import { Navbar, Nav as RBNav, Container } from "react-bootstrap";
import Search from "./Search";

const Nav = (props) => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          alt="ghostfacer logo"
          src="https://www.nicepng.com/png/full/134-1346135_supernatural-ghostfacers-logo.png"
          width="250"
          height="48"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <RBNav>
          <Search />
        </RBNav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Nav;
