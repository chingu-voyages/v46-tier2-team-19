import React from "react";
import { Link } from "react-router-dom";
import { UsePosts } from "../../api";
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
      {data.map((post) => (
        <p key={post.id}>
          <Link onClick={() => setPostId(post.id)} to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </p>
      ))}
    </>
  );
};
