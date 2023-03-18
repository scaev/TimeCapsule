import { Link } from "react-router-dom";
import { useState } from "react";
import * as postsAPI from "../../utilities/posts-api";
import "./PostComponent.css";

export default function PostComponent({ posts, user, setPosts }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(posts.content);

  const handleDelete = async () => {
    const allPosts = await postsAPI.deletePost(posts._id);
    setPosts(allPosts);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedPost = { content };
    const updated = await postsAPI.updatePost(posts._id, updatedPost);
    setPosts((prevPosts) => {
      return prevPosts.map((p) => (p._id === updated._id ? updated : p));
    });
    setIsEditing(false);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div id="post-card">
      <div id="name-btn">
        <div className="name">{posts.user?.name}</div>
        <button id="delete-btn" onClick={handleDelete}>
          X
        </button>
      </div>
      <div className="name-date">
        {new Date(posts.updatedAt).toLocaleDateString()}
      </div>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <label>
            Content:
            <textarea
              id="post-text"
              value={content}
              onChange={handleContentChange}
            />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={toggleEditForm}>
            Cancel
          </button>
        </form>
      ) : (
        <div id="text-btn">
          <strong>{posts.title}</strong>
          {posts.content} <button onClick={toggleEditForm}>Edit</button>
        </div>
      )}
      <img
        // className="post-image"
        className={posts.image === "" ? "noimage" : "post-image"}
        src={posts.image}
        alt="image"
        id="post-image-id"
      />
    </div>
  );
}
