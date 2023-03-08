import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewPostPage from "../NewPostPage/NewPostPage";
import PostHistoryPage from "../PostHistoryPage/PostHistoryPage";
import NavBar from "../../components/NavBar/NavBar.jsx";
import PostListPage from "../../components/PostListPage/PostListPage.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
// import PostDetails from "./components/PostDetails/PostDetails";
import { posts } from "../../data.js";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Router>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PostListPage posts={posts} />} />
            <Route path="/posts" element={<PostHistoryPage />} />
            <Route path="/posts/new" element={<NewPostPage />} />
            {/* <Route path="/posts/:id" element={<PostDetails />} /> */}
          </Routes>
        </Router>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
