import React from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getPost } from "../api/posts";
const PostDetail = () => {
  const params = useParams();
  const { postId } = params;
  const { status, data, error, isLoading } = getPost(postId);

  return (
    <>
      {isLoading === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>post details</h2>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      )}
    </>
  );
};

export default PostDetail;
