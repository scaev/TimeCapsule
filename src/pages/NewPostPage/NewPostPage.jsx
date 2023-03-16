import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent.jsx";
import * as postsAPI from "../../utilities/posts-api";
import "./NewPostPage.css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

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
          <CloudinaryUploadWidget />
          <img id="uploadedimage" />
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
    </div>
  );
}

function CloudinaryUploadWidget() {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dal04xwlw",
    },
  });
  const myImage = cld.image("front_face");
  // myImage.resize(fill().width(250).height(250));

  useEffect(() => {
    const cloudName = "dal04xwlw";
    const uploadPreset = "timecapsulepics";

    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, []);

  return (
    <>
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
      <AdvancedImage cldImg={myImage} />
    </>
  );
}
