import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewPostPage from "../NewPostPage/NewPostPage";
import PostHistoryPage from "../PostHistoryPage/PostHistoryPage";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<h1>ROOT</h1>} />
            <Route path="/posts" element={<PostHistoryPage />} />
            <Route path="/posts/new" element={<NewPostPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
