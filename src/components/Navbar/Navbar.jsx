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
        <h1 onClick={()=> navigate("/")} className="navbarH1">JobBoard</h1>
        {user ? (
          <button className="logoutBtn" onClick={logout}>Logout</button>
        ) : (
          <button className="loginBtn" onClick={() => navigate("/login")}>Login</button>
        )}
        {/* condition ? valueIfTrue : valueIfFalse */}
      </nav>
      <Link className="profileLink" to="/profile">Profile</Link>
    </div>
  );
}
export default Navbar;
