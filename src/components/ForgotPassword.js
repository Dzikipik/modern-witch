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
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
  }

  return (
    <>
      <h2>Zresetuj hasło</h2>
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input id="email" ref={emailRef} required placeholder="Email" />
        </label>

        <button type="submit" disabled={loading}>
          Resetuj hasło
        </button>
      </form>
      <Link to="/">Zaloguj się!</Link>
      <div>
        Nie masz jeszcze konta? <Link to="/signup">Dołącz!</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
