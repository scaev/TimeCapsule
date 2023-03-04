import React from "react";
import SignUpForm from "../../components/SignUpFormAlt/SignUpFormAlt";
import LoginForm from "../../components/LoginFormAlt/LoginFormAlt";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    // if setUser tru show the login form if its false show the singnp page
    <main>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
