import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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
      setError("failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={loading}>
          Zaloguj się!
        </button>
      </form>
      <Link to="/forgot-password">Zapomniałe hasła?</Link>
      <div>
        Nie masz jeszcze konta? <Link to="/signup">Dołącz!</Link>
      </div>
    </>
  );
};

export default Login;
