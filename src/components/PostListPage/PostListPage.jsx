import PostCard from "../PostCard/PostCard";


export default function PostListPage(props) {
  return (
    <div className="container">
      {/* {props.posts.map((post) => { */}
        return <PostCard key={post.title} posts={posts} />;
      {/* })} */}
    </div>
  );
}
