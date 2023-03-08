import { Link } from "react-router-dom";

export default function PostComponent(props) {
  return (
    <>
      <Link to={`/posts/${props.post.title}`} className="post-link">
        <div
          style={{
            background: `url(${props.post.poster_path}) no-repeat center center`,
            WebkitBackgroundSize: "cover",
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.post.title}</h1>
            <h4>Posted: {props.post.post_date}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}
