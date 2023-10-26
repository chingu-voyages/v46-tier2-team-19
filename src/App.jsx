import Spa from "./routes";
import makeServer from "../mirageServer/server";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Posts,
  PostDetail,
  About,
  Search,
  RecipeDetailsPage,
  Components,
} from "@/pages";
// Please keep on when possible to avoid using up our Tasty API free quota
// All api calls will be intercepted and fulfilled by the mirage server.
const USE_MIRAGE_API = true;

if (USE_MIRAGE_API) {
  makeServer();
}

function App() {
  return (
    <Routes>
      <Route element={<Spa />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes">
          <Route path=":recipeId" element={<RecipeDetailsPage />} />
        </Route>
        <Route path="/components" element={<Components />} />
      </Route>
    </Routes>
  );
}

export default App;
