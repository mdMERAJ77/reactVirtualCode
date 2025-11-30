import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h2>🎬Movie Explorer</h2>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/movie-links">Movie Links</Link>
      </nav>
    </div>
  );
}

export default Navbar;
