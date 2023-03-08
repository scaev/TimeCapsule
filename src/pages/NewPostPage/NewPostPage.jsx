import React, { useState } from "react";

function NewPostPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, message, name, creator }),
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      alert("Post created successfully!");
      setTitle("");
      setMessage("");
      setName("");
      setCreator("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Creator:
          <input
            type="text"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPostPage;
