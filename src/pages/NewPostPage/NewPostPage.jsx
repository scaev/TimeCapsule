import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent.jsx";
import * as postsAPI from "../../utilities/posts-api";
import "./NewPostPage.css";
import axios from "axios";
import { Card, Alert, Form, Button, Container } from "react-bootstrap";

function NewPostPage({ setPosts, posts, user, image, setImage }) {
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

  async function handleSubmit2(e) {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "presetName");
        const dataRes = await axios.post("yourUrl", formData);
        imageUrl = dataRes.data.url;
      }

      const submitPost = {
        image: imageUrl,
      };
      await axios.post("http://localhost:3001/store-image", submitPost);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

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
                image={image}
                setImage={setImage}
              />
            ))}
          </div>
        )}
      </div>
      {/* //image upload_preset */}
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Add Image</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit2}>
                  <Form.Group>
                    <Form.File
                      className="position-relative mt-2"
                      name="file"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </>
        </div>
      </Container>
    </div>
  );
}

export default NewPostPage;
