import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export function UsePosts() {
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

export function GetPost(postId) {
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
