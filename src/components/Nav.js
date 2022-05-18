import { Link } from "react-router-dom";



function Nav(props) {
    return (
        <nav className="nav">
            <>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="./components/auth/signIn">
                <div>Sign In</div> 
            </Link>
            <Link to="./components/auth/signUp">
                <div>Sign Up</div>
            </Link>
            </>
        </nav>
    );
}

export default Nav;
