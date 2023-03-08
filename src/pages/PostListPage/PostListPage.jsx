import PostComponent from "../../components/PostComponent/PostComponent.jsx";

export default function PostListPage({ posts, user, setPosts }) {
  return (
    <>
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
            />
          ))}
        </div>
      )}
    </>
  );
}
