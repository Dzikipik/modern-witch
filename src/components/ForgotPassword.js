import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Sprawdź skrzynkę mailową!");
    } catch {
      setError("Nie udało się zresetować konta");
    }
  }

  return (
    <div className="forgotpassword">
      <h2>Zresetuj hasło</h2>
      <form className="forgotpassword-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input id="email" ref={emailRef} required placeholder="Email" />
        </label>

        <button className="button" type="submit" disabled={loading}>
          Resetuj hasło
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {message && <div className="success">{message}</div>}
      <Link to="/">Zaloguj się!</Link>
      <div>
        Nie masz konta? <Link to="/signup">Dołącz!</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
