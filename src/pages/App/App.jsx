import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewPostPage from "../NewPostPage/NewPostPage";
import PostHistoryPage from "../PostHistoryPage/PostHistoryPage";
import NavBar from "../../components/NavBar/NavBar.jsx";
import PostListPage from "../../pages/PostListPage/PostListPage.jsx";
import * as postsAPI from "../../utilities/posts-api";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
// import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    async function getPosts() {
      const posts = await postsAPI.getAll();
      setPosts(posts);
    }
    getPosts();
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route
              path="/posts/new"
              element={
                <NewPostPage
                  setPosts={setPosts}
                  posts={posts}
                  user={user}
                  image={image}
                  setImage={setImage}
                />
              }
            />
            <Route
              path="/posts"
              element={
                <PostListPage posts={posts} user={user} setPosts={setPosts} />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
