import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./api/posts";
function App() {
  const [count, setCount] = useState(0);
  const [postId, setPostId] = useState(-1);
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div className="w-full h-full mx-auto">
      <div className="flex w-full h-full flex-col items-center mt-24">
        <div className="w-full flex justify-center gap-8 items-center px-4 mx-auto">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold mt-4">Vite + React</h1>
        <div className="bg-white rounded-lg shadow-lg flex flex-col min-w-fit p-4 mt-4 mx-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded w-[50%] mx-auto"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4">
            Edit{" "}
            <code className="font-mono bg-gray-200 rounded px-1">
              src/App.jsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-gray-600 mt-4">
          Click on the Vite and React logos to learn more
        </p>
        {postId > -1 ? "" : <Posts setPostId={setPostId} />}
      </div>
    </div>
  );
}

export default App;

function Posts({ setPostId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}
