import PostComponent from "../../components/PostComponent/PostComponent.jsx";

export default function PostListPage({ posts, user, setPosts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <span>no post yet</span>
      ) : (
        <div>
          {posts.map((post, i) => (
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
//   return (
//     <div className="container">
//       {props.posts.map((post) => {
//         return <PostComponent key={post.title} post={post} />;
//       })}
//     </div>
//   );
// }
