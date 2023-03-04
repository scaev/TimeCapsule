import React from "react";
import SignUpForm from "../../components/SignUpFormAlt/SignUpFormAlt";
import LoginForm from "../../components/LoginFormAlt/LoginFormAlt";

function AuthPage({ setUser }) {
  return (
    // if setUser tru show the login form if its false show the singnp page
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}

export default AuthPage;
