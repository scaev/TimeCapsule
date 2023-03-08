import PostComponent from "../../components/PostComponent/PostComponent.jsx";

export default function PostListPage(props) {
  return (
    <div className="container">
      {props.posts.map((post) => {
        return <PostComponent key={post.title} post={post} />;
      })}
    </div>
  );
}
