import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Home</div>  
                <div>Sign In</div>
                <div>Sign Up</div>
            </Link>
            <button>Create a spooky list</button>

        </nav>
    );
}

export default Header;