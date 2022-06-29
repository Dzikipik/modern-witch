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
        setError("Nie udało się zaktualizować konta");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <h2>Update profile</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            id="email"
            ref={emailRef}
            required
            defaultValue={auth.currentUser.email}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            id="password"
            type="password"
            ref={passwordRef}
            required
            placeholder="Leave blank to keep the same"
          />
        </label>
        <label>
          Password
          <input
            id="checkPassword"
            type="password"
            ref={passwordConfirmationRef}
            required
            placeholder="Leave blank to keep the same"
          />
        </label>
        <button type="submit" disabled={loading}>
          Update
        </button>
      </form>
      <div>
        <Link to="/">Cancel</Link>{" "}
      </div>
    </>
  );
};

export default UpdateProfile;
