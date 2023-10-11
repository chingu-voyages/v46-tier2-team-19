import { UsePosts } from "../../api";
import { PostCard } from "../post-card";
export const PostList = () => {
  const { data, isLoading, isError, error } = UsePosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);

    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>PostList</div>
      <ul className="flex flex-col gap-4">
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};
