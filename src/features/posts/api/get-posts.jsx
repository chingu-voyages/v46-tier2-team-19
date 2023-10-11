import { getPostById } from "../../../api/posts";
import { useQuery } from "@tanstack/react-query";

export function GetPostById(id) {
  return useQuery(["posts", id], () => getPostById(id));
}
