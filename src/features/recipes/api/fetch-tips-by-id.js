import { fetchTips } from "@/api/tips";
import { useQuery } from "@tanstack/react-query";

export function FetchTipsById(id) {
  const fetch = "tips for: " + id;
  return useQuery(["tips", fetch], () => fetchTips(id), {
    enabled: !!id,
  });
}
