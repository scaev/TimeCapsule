import React, { useState } from "react";

function NewPostPage() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, location }),
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      alert("Post created successfully!");
      setDescription("");
      setLocation("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPostPage;
