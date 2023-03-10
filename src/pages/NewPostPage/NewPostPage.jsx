import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent.jsx";
import * as postsAPI from "../../utilities/posts-api";
import "./NewPostPage.css";
import axios from "axios";

///changed this part  for image setimage
export default function NewPostPage({ setPosts, posts, user }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [image, setImage] = useState();
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
        formData.append("upload_preset", "timecapsulepics");
        const dataRes = await axios.post("/cloudinary", formData, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/from-data",
        });

        imageUrl = dataRes.data.url;
      }

      const submitPost = {
        image: imageUrl,
      };
      await axios.post("/api/save-image", submitPost);
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
            {posts.map((posts, i) => (
              <PostComponent
                posts={posts}
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
      {/* <Container
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
                    <Form.Control
                      className="position-relative mt-2"
                      type="file"
                      name="file"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </>
        </div>
      </Container> */}
    </div>
  );
}
