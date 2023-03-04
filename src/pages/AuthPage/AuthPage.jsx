import React from "react";
import SignUpForm from "../../components/SignUpFormAlt/SignUpFormAlt";
import LoginForm from "../../components/LoginFormAlt/LoginFormAlt";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    // if setUser tru show the login form if its false show the singnp page
    <main>
      {showSignUp ? (
        <SignUpForm
          setUser={setUser}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
      ) : (
        <LoginForm
          setUser={setUser}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
      )}
    </main>
  );
}

export default AuthPage;
