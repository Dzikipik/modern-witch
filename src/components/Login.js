import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Błędne hasło");
    }
    setLoading(false);
  }

  return (
    <div className="container">
    <Logo />
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input id="email" ref={emailRef} required placeholder="Email" />
        </label>
        <label>
          Hasło
          <input
            id="password"
            type="password"
            ref={passwordRef}
            required
            placeholder="Password"
          />
        </label>

        <button className="button" type="submit" disabled={loading}>
          Zaloguj się!
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      
      <div className="login-bottom">
        <Link to="/forgot-password">Zapomniałeś hasła?</Link>
        <div>Nie masz konta? <Link to="/signup">Dołącz!</Link></div>
      </div>
    </div>
    </div>
  );
};

export default Login;
