import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Ghostfacers</div>
            </Link>
        </nav>
    );
}

export default Header;