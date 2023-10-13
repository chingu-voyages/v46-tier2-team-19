import axios from "axios";

export async function getPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data;
}

export async function getPostById(id) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return data;
}
