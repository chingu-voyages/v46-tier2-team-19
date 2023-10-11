import { GetPostById } from "../features/posts/api/get-posts";
import { useParams } from "react-router-dom";
// import { GetPost } from "../api/posts";

const PostDetail = () => {
  const { postId } = useParams();
  const { data, isLoading } = GetPostById(postId);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>post details</h2>
          <p>{data?.title}</p>
          <p>{data?.body}</p>
        </div>
      )}
    </>
  );
};

export default PostDetail;
