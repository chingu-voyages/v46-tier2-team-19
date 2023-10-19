import { PostList } from "@/features/posts";

function Posts() {
  return (
    <div className="p-10">
      <h1 className="text-center">Posts</h1>
      <div>
        <PostList />
      </div>
    </div>
  );
}

export default Posts;
