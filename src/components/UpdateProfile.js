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
      <div className="header">
        <h2>Ustawienia profilu</h2>
        <p>Zalogowany jako {user.email}</p>
      </div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Hasło
          <input
            id="password"
            type="password"
            ref={passwordRef}
            required
            placeholder="Hasło"
          />
        </label>
        <label>
          Powtórz hasło
          <input
            id="checkPassword"
            type="password"
            ref={passwordConfirmationRef}
            required
            placeholder="Powtórz hasło"
          />
        </label>
        <button className="button" type="submit" disabled={loading}>
          Zaktualizuj
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {/* <div className="login-bottom">
        <Link to="/dashboard">Anuluj</Link>
      </div> */}
    </div>
  );
};

export default UpdateProfile;
