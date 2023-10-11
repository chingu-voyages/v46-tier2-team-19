import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./api/posts";
import makeServer from "./mirageServer/server";

// Please keep on when possible to avoid using up our Tasty API free quota
// All api calls will be intercepted and fulfilled by the mirage server.
const USE_MIRAGE_API = true;

if (USE_MIRAGE_API) {
  makeServer();
}

function App() {
  const [count, setCount] = useState(0);
  const [postId, setPostId] = useState(-1);

  return (
    <div className="w-full h-full mx-auto">
      <div className="flex flex-col items-center w-full h-full mt-24">
        <div className="flex items-center justify-center w-full gap-8 px-4 mx-auto">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>
        <h1 className="mt-4 text-3xl font-bold">Vite + React</h1>
        <div className="flex flex-col p-4 mx-auto mt-4 bg-white rounded-lg shadow-lg min-w-fit">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded w-[50%] mx-auto"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4">
            Edit{" "}
            <code className="px-1 font-mono bg-gray-200 rounded">
              src/App.jsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="mt-4 text-gray-600">
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
