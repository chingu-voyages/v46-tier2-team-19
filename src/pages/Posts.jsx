import { PostList } from "@/features/posts";
import { Heading } from "@/features/ui";

function Posts() {
  return (
    <div className="p-10">
      {/* <h1 className="text-center">Posts</h1> */}
      <Heading level="h1" variant="lava">
        Posts
      </Heading>

      <div>
        <PostList />
      </div>
    </div>
  );
}

export default Posts;
