import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    
    return ( 
        <nav className="Navbar">
            <h1>Blog App</h1>
            <div className="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/create">New Blog</NavLink>
                
            </div>
        </nav>

     );
}
 
export default Navbar;