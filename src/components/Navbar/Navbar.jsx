import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <nav>
        <h3>JobBoard Navbar</h3>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
        {/* condition ? valueIfTrue : valueIfFalse */}
      </nav>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
export default Navbar;
