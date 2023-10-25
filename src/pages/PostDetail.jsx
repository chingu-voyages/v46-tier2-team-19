import { GetPostById } from "@/features/posts";
import { Heading } from "@/features/ui";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const { data, isLoading } = GetPostById(postId);

  return (
    <>
      {isLoading ? (
        // <h1>Loading...</h1>
        <Heading level="h1" variant="lava">
          Loading...
        </Heading>
      ) : (
        <div>
          {/* <h2>post details</h2> */}
          <Heading level="h2" variant="lava">
            post details
          </Heading>
          <p>{data?.title}</p>
          <p>{data?.body}</p>
        </div>
      )}
    </>
  );
};

export default PostDetail;
