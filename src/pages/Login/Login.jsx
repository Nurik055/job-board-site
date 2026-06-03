import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "../Login/Login.css";
function login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [name, setName] = useState(""); //1
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const isNameValid = name.trim().length > 1;
    const isEmailValid = email.includes("@");
    const firstLetter = name[0];
    const isUpperCase = firstLetter === firstLetter.toUpperCase();
    {
      /* here we compare firstLetter and the uppercase version, and the result is true or false, so isUppercase is eather true or false*/
    }

    if (isNameValid && isEmailValid && isUpperCase) {
      login({ name, email });
    } else {
      toast.error("Invalid input(s)");
      toast.error("Check if the name is too short or lowercase!");
      return;
    }

    {
      /* { name: "name", email: "email" } and send it to login function in AuthContext */
    }

    navigate("/");
  }

  {
    /* value={name} show state */
  }
  {
    /*onChange={(e) => setName(e.target.value)}  1, update state */
  }

  return (
  <div className="loginContainer">
    <h2 className="loginTitle">Please Login</h2>

    <form className="loginForm" onSubmit={handleSubmit}>
      <input
        className="loginInput"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="loginInput"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="loginButton" type="submit">
        Login
      </button>
    </form>
  </div>
);
}

export default login;
