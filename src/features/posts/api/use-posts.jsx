import { getPosts } from "../../../api/posts";
import { useQuery } from "@tanstack/react-query";
export function UsePosts() {
  return useQuery(["posts"], getPosts);
}

// export function GetPost(postId) {
//   console.log({ postId });
//   return useQuery({
//     queryKey: ["posts", postId],
//     queryFn: async ({ queryKey }) => {
//       const [, postId] = queryKey;
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       );
//       return data;
//     },
//   });
