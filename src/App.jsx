import Nav from "./routes";
import makeServer from "./mirageServer/server";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Posts,
  PostDetail,
  About,
  RecipesPage,
  RecipeDetailsPage,
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
      <Route element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipesId" element={<RecipeDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
