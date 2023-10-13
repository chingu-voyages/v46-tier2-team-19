import { getPosts } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";

export function UsePosts() {
  return useQuery(["posts"], getPosts);
}
