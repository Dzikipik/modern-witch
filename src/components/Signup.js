import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Hasła nie są identyczne");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Wystąpił błąd podczas tworzenia konta");
    }
    setLoading(false);
  }

  return (
    <>
    <Logo />
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit}>
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
        <label>
          Powtórz hasło
          <input
            id="checkPassword"
            type="password"
            ref={passwordConfirmationRef}
            required
            placeholder="Check password"
          />
        </label>
        <button className="button" type="submit" disabled={loading}>
          Dołącz
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="login-bottom">
      <div>
        Masz już konto? <Link to="/">Zaloguj się</Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
