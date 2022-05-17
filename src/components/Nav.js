import { Link } from "react-router-dom";



function Nav(props) {
    return (
        <nav className="nav">
            <div>
            <button>Create a spooky list</button>
            <Link to="/">
                <div>Home</div>
                <div>Sign In</div>
                <div>Sign Up</div>
            </Link>
            </div>

        </nav>
    );
}

export default Nav;
