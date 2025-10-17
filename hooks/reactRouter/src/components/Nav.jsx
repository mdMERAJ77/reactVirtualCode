import { NavLink } from "react-router-dom";
import "../App.css";
function Nav() {
  return (
    <div>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
