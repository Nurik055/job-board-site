import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";


function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <nav>
        <div className="leftSide">
          <img
          src={logo}
          alt="JobBoard"
          className="navbarLogo"
          onClick={() => navigate("/")}
        />
        <Link className="profileLink" to="/profile">
        Profile
      </Link>
        </div>
        {user ? (
          <button className="logoutBtn" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="loginBtn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
        {/* condition ? valueIfTrue : valueIfFalse */}
      </nav>
      
    </div>
  );
}
export default Navbar;
