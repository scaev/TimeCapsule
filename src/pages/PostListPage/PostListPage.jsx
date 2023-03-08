import PostCard from "../../components/PostCard/PostCard";

export default function PostListPage(props) {
  return (
    <div className="container">
      {props.posts.map((post) => {
        return <PostCard key={post.title} post={post} />;
      })}
    </div>
  );
}
