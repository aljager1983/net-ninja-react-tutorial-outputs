import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Promdi Dojo</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
        );
}
 
export default Navbar;

//notes:
//lesson 23- Link element makes the anchor loads faster
//