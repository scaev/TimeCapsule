import { Link } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import "./PostComponent.css";

export default function PostComponent({ posts, user, setPosts }) {
  const handleClick = async () => {
    const allPosts = await postsAPI.deletePost(posts._id);
    setPosts(allPosts);
  };
  return (
    <div id="post-card">
      {/* //if there is a problem with timing */}
      <div id="text-btn">
        <div className="name-date">{posts.user?.name}</div>
        <button id="delete-btn" onClick={handleClick}>
          X
        </button>
      </div>
      <div className="name-date">
        {new Date(posts.updatedAt).toLocaleDateString()}
      </div>
      <div id="text-btn">
        <strong>{posts.content}</strong>{" "}
      </div>
    </div>
  );
}
