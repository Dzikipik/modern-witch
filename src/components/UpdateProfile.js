import React, { useRef, useState } from "react";
import { auth } from "../dataBase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword, updateEmail } from "firebase/auth";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Hasła nie są identyczne");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== auth.currentUser.email) {
      updateEmail(user, emailRef.current.value);
    }
    if (passwordRef.current.value !== auth.currentUser.password) {
      updatePassword(user, passwordRef.current.value);
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Nie udało się zmienić hasła");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="update-profile">
      <h2>Zmiana hasła</h2>
      <div>Zalogowany jako {user.email}</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Hasło
          <input
            id="password"
            type="password"
            ref={passwordRef}
            required
            placeholder="Leave blank to keep the same"
          />
        </label>
        <label>
          Powtórz hasło
          <input
            id="checkPassword"
            type="password"
            ref={passwordConfirmationRef}
            required
            placeholder="Leave blank to keep the same"
          />
        </label>
        <button className="button" type="submit" disabled={loading}>
          Zaktualizuj
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      <div>
        <Link to="/">Anuluj</Link>{" "}
      </div>
    </div>
  );
};

export default UpdateProfile;
