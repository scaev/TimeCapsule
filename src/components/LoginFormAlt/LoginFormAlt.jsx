import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./style.css";
import { Link } from "react-router-dom";

export default function LoginForm({ setUser, showSignUp, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div>
        <div class="login-card">
          <div class="login-card-logo">
            <img src="logo.png" alt="logo" />
          </div>
          <div class="login-card-header">
            <h1>Sign In</h1>
            <div>Please login to use the platform</div>
          </div>
          <form class="login-card-form" onSubmit={handleSubmit}>
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded"></span>
              <input
                type="text"
                placeholder="Enter Email"
                id="emailForm"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                autofocus
                required
              />
            </div>
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded"></span>
              <input
                type="password"
                placeholder="Enter Password"
                id="passwordForm"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div class="login-card-footer">
            Don't have an account?{" "}
            <a href="#" onClick={() => setShowSignUp(!showSignUp)}>
              Create a free account.
            </a>
          </div>
        </div>
        <div class="login-card-social">
          <div>Other Sign-In Options</div>
          <div class="login-card-social-btns">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
