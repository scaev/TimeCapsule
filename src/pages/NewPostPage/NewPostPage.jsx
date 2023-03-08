import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent.jsx";
import * as postsAPI from "../../utilities/posts-api";
import "./NewPostPage.css";

function NewPostPage({ setPosts, posts, user }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [postData, setPostData] = useState({
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await postsAPI.addPost(postData);
      setPosts([newPost, ...posts]);
      navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (evt) => {
    setPostData({ ...postData, [evt.target.name]: evt.target.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            id="post-text"
            name="content"
            placeholder="What's happening?"
            rows="7"
            value={postData.name}
            onChange={handleChange}
          ></textarea>
          <button type="submit" id="submit-btn">
            add post
          </button>
        </form>
      </div>
      <div>
        <h1>Posts</h1>
        {posts.length === 0 ? (
          <span>no post yet</span>
        ) : (
          <div>
            {posts.map((post, i) => (
              <PostComponent
                posts={post}
                key={i}
                user={user}
                setPosts={setPosts}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewPostPage;
