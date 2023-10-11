import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      return data;
    },
  });
}

export function getPost(postId) {
  console.log({ postId });
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: async ({ queryKey }) => {
      const [, postId] = queryKey;
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return data;
    },
  });
}
